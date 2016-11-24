//El funcionamiento del juego es de la siguiente forma:
//Los enemigos se crearan cada 200 ciclos del juego, restandoce este valor cada diez puntos y se disminuye en 5.
//Los enemigos al iniciar se crearan con una vida y cada 20 puntos se aumentara el numero de vidas en 1.
//Los enemigos se dejaran de crear cuando la nave sea destruida.
//Los enemigos solo se destruiran por una colision con una bala o con la nave
//Los enemigos cuando llegan a un borde del mundo reaparecen en el costado contrario en cual llevan la trayectoria
//Los movimientos del enemigo se crearan al instante de su creacion y seran igual mientras no se destruido
//Los enemigos dispararan en direccion en la que este la nave
//Los enemigos disparan en un intervalo aproximado de un segundo
//La nave sera destruida por una colision con una bala enemiga o con un enemigo
//La nave se movera en cualquier direccion
//La nave podra disparar en un intervalo de tiempo
//El juego solo terminara cuando ya no hayan vidas.


//Propiedades del enemigo
EnemyOvni = function(index, game, player, bullets, vidas, movi){
	var x = game.world.randomX;
	this.juego = game;
	this.vidas = vidas;
	this.jugador = player;
	this.disparos = bullets;
	this.velDisparo = 400;
	this.sigDisparo = 0;
	this.alive = true;

	this.movX = movi[0];
	this.movY = movi[1];

	this.ovni = juego.add.sprite(x, 10, 'ovniAni');
	this.ovni.anchor.set(0.5);
	this.ovni.frame = 0;
	this.ovni.animations.add('moverse', [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0], 10, true);
	
	this.ovni.name = index.toString();
	juego.physics.enable(this.ovni, Phaser.Physics.ARCADE);
	this.ovni.body.immovable = false;
	this.ovni.body.collideWorldBounds = false;
	this.ovni.body.bounce.setTo(1,1);
};

//Funcion en la cual se descuenta el daño al enemigo
EnemyOvni.prototype.damage = function(){
	this.vidas -= 1;
	if(this.vidas <= 0){
		this.alive = false;
		this.ovni.kill();
		return true;
	}
	return false;
};

//Funcion que actuliza los estados del enemigo
EnemyOvni.prototype.update = function(){
	this.ovni.animations.play('moverse');
	movimientosOvni(this.ovni, this.movX, this.movY);
	var dis;

	if(juego.time.now > this.sigDisparo){
		dis = this.disparos.getFirstExists(false);
	}
	if (dis && nave.alive && this.alive){
		audioDisparo.play('ad');
		dis.reset(this.ovni.x, this.ovni.y);
		juego.physics.arcade.moveToObject(dis, nave, 200);

		this.sigDisparo = juego.time.now + 800;
	}
	juego.physics.arcade.overlap(this.disparos, nave, bulletHitNave,  null, this);
	
};

var juego = new Phaser.Game(480, 600, Phaser.CANVAS,  'bloqueJuego');

var audioFondo;
var fondoJuego;
var tecladoDirecciones;
var botonDisparo;

var nave;
var vidasNave;
var escudo;
var tiempoEscudo;
var escudoImg;

var disparo;
var disparoTiempo = 0; 
var estadoDisparo = true;
var audioDisparo;
var audioDisparoStop = true;

var puntaje;
var textoFin = "";
var textReiniciar = "";
var textPause = "";

var enemies = {};
var enemiesLenght = 0;
var enemiesDisparo;
var contadorEnemies = 0;
var movimientosEnemigo;
var ovni1;
var tiempoCreacion;
var timeCrea;
var valorCrea;
var vidasCantidad;
var valorVidasCanti

var explosions;
var audioExplosion;


//Funcion que tiene los movimientos de la nave
function movimientosNave(){
	if(direcciones.right.isDown){
		nave.position.x += 3;
		nave.scale.setTo(0.07,0.1);
	}
	if(direcciones.right.isUp){
			nave.scale.setTo(0.1);
	}
	if(direcciones.left.isDown){
		nave.position.x -= 3;
		nave.scale.setTo(0.07,0.1);
	}
	if(direcciones.up.isDown){nave.position.y -= 3;}
	if(direcciones.down.isDown){nave.position.y += 3;}
	if(escudo){
		escudoImg.position.x = nave.x;
		escudoImg.position.y = nave.y;
	}
}

//Funcion de disparo de la nave
function disparosNave(){
	var dis;
	if(botonDisparo.isDown && estadoDisparo){
		estadoDisparo = false;
		if(audioDisparoStop && nave.alive){
			audioDisparo.play('ad');
		}
		if(juego.time.now > disparoTiempo){
			dis = disparo.getFirstExists(false);
		}
		if (dis){
			dis.reset(nave.x, nave.y);
			dis.body.velocity.y = - 400;
			disparoTiempo = juego.time.now + 200;
		}
	}
	else if(botonDisparo.isUp){
		estadoDisparo = true;
	}
}

//Funcion que controla el movimiento del ovni
function movimientosOvni(ovni, x, y){
	ovni.position.x += x;
	ovni.position.y += y;
	if(ovni.position.y > juego.world.height){
		ovni.position.y = 0;
	}
	if(ovni.position.x > juego.world.width){
		ovni.position.x = 0;
	}
	if(ovni.position.x < 0){
		ovni.position.x = juego.world.width;
	}
}

//Animacion explosion
function animacionExplosion(enemigo){
	audioExplosion.play('ae');
	var explosionAnimation = explosions.getFirstExists(false);
    explosionAnimation.reset(enemigo.x, enemigo.y);
    explosionAnimation.play('kaboom', 20, false, true);    
}

//Funcion que controla la colision del disparo con el enemigo
function bulletHitEnemy(enemigo, disparo){
	var destruido = enemies[enemigo.name].damage();
	disparo.kill();

	if(destruido){
		animacionExplosion(enemigo);
		puntaje += 1;
		return true;
	}
	return false;
}

//Funcion que controla la colision de un disparo enemigo con la nave
function bulletHitNave(nave, disparoEnemy){
	if(!escudo){
		disparoEnemy.kill();
		vidasNave -= 1;
		animacionExplosion(nave);
		if(vidasNave == 0){
			disparo.destroy();
			nave.kill();
			escudoImg.kill();
		}
		nave.position.x = juego.width/2;
		nave.position.y = juego.height - juego.height/4;
		escudo = true;
		tiempoEscudo = juego.time.now;
	}
}

//Funcion que controla la colision de la nave con un enemigo
function naveHitEnemy(n, e){
	e.vidas = 0;
	enemies[e.name].damage();
	e.kill();
	if(!escudo){
		vidasNave -= 1;
		nave.position.x = juego.width/2;
		nave.position.y = juego.height - juego.height/4;
	}
	animacionExplosion(e);

	if(vidasNave == 0){
		disparo.destroy();
		n.kill();
		escudoImg.kill();
	}
	escudo = true;
	tiempoEscudo = juego.time.now;
	
}

//Funcion que muestra mensaje de fin del juego por muerte de la nave
function finDelJuego(){
	if(!nave.alive){
		var text;
		textoFin = 'Juego Terminado ';
		textReiniciar = 'Click para reiniciar ';
		restart();
	}
}

//Funcion que reinicia el juego
function restart(){
	if(!nave.alive){
		if(juego.input.activePointer.isDown){
			juego.state.start('principal');
		}
	}	
}

//Funcion que crea los enemigos
function crearEnemigos(){

	if(tiempoCreacion > timeCrea && nave.alive){
		contadorEnemies += 1;
		var mov = movimientosEnemigo[Math.floor((Math.random() * 5))];
		enemies[contadorEnemies] = (new EnemyOvni(contadorEnemies, juego, ovni1, enemiesDisparo, vidasCantidad, mov));

		enemiesLenght += 1;
		tiempoCreacion = 0;	
	}
	if(puntaje % valorCrea == 0 && puntaje > 0){
		if (timeCrea > 0){
			timeCrea -= 5;
		}
		valorCrea += 10;
	}

	if(puntaje % valorVidasCanti == 0 && puntaje > 0){
		vidasCantidad += 1;
		valorVidasCanti += 20
	}

}

//Funcion que pausa el juego
function pausar(){
	if(nave.alive){
		if(juego.paused){
			juego.paused = false;
			textPause = "";
		}
		else{
			juego.paused = true;
			textPause = "Pausa";
		}
	}
}

var estadoPrincipal = {

	//Funcion que carga los elementos del juego
	preload: function(){
		juego.load.image('fondo', 'img/space.jpg');
		juego.load.image('nave', 'img/nave.png');
		juego.load.image('bala', 'img/disparo.png');
		juego.load.image('shield', 'img/shield.png');
 		//juego.load.image('ovni1', 'img/ovni1.png');
 		juego.load.spritesheet('kaboom', 'img/Explosion-Sprite-Sheet.png',118,118,24);
 		juego.load.spritesheet('ovniAni', 'img/ovniSprite.png', 50, 42, 24);
 		juego.load.audio('audioExplo', 'audio/Big Explosion Effect Sound.mp3');
  		juego.load.audio('audioDis', 'audio/Star Wars Weapon Sound Effects.mp3');
  		juego.load.audio('audioFon', 'audio/Aegis Wing Soundtrack - 1 Theme Song Elegy.mp3');	
	},

	//Funcion que crea los elementos del juego
	create: function(){
		juego.physics.startSystem(Phaser.Physics.ARCADE);		

		//Reproduce el audio del juego
		audioFondo = juego.add.audio('audioFon');
		audioFondo.loopFull(1.5);
		audioFondo.play();

		//Agrega el fondo al juego
		fondoJuego = juego.add.tileSprite(0, 0, 1920, 1080, 'fondo');
		
		//Agragar el boton de pausa
		pause = juego.input.keyboard.addKey(Phaser.Keyboard.P);
		pause.onDown.add(pausar, this);

		//Agrega las entradas de teclado flechas y espacio
		direcciones = juego.input.keyboard.createCursorKeys();
		botonDisparo = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//Agrega la nave
		nave = juego.add.sprite(juego.width/2, juego.height - juego.height/4, 'nave');
		nave.anchor.setTo(0.5, 0.5);
		nave.scale.setTo(0.1);
		juego.physics.arcade.enable(nave);
		nave.body.collideWorldBounds = true;

		//Agregar escudo de la nave
		escudoImg =	juego.add.sprite(-100, -100, 'shield');
		escudoImg.anchor.setTo(0.5, 0.5);
		escudoImg.scale.setTo(0.1);

		//Agrega las balas enemigos
		enemiesDisparo = juego.add.group();
		enemiesDisparo.enableBody = true;
		enemiesDisparo.physicsBodyType = Phaser.Physics.ARCADE;
		enemiesDisparo.createMultiple(100, 'bala');
		enemiesDisparo.setAll('anchor.x', 0.5);
		enemiesDisparo.setAll('anchor.y', 1);
		enemiesDisparo.setAll('angle', 180);
		enemiesDisparo.setAll('outOfBoundsKill', true);
		enemiesDisparo.setAll('checkWorldBounds', true);

		//Agregar ovni
		ovni1 = juego.add.sprite(-100, -100, 'ovni1');
		ovni1.anchor.setTo(0.5);
		ovni1.scale.setTo(0.5);

		enemies = {};

		//Agrega las balas nave
		disparo = juego.add.group();
		disparo.enableBody = true;
		disparo.physicsBodyType = Phaser.Physics.ARCADE;
		disparo.createMultiple(30, 'bala');
		disparo.setAll('anchor.x', 0.5);
		disparo.setAll('anchor.y', 1);
		disparo.setAll('outOfBoundsKill', true);
		disparo.setAll('checkWorldBounds', true);
		audioDisparo = juego.add.audio('audioDis');
		audioDisparo.allowMultiple = true;
		audioDisparo.volume = 0;
		audioDisparo.addMarker('ad', 8, 0.4,0.2);		

		//Agregar animacion de explosion
		explosions = juego.add.group();
	    for (var i = 0; i < 10; i++)
	    {
	        var explosionAnimation = explosions.create(0, 0, 'kaboom', [0], false);
	        explosionAnimation.anchor.setTo(0.5, 0.5);
	        explosionAnimation.animations.add('kaboom');
	    }

	    //Agregar sonido de explosion
	    audioExplosion = juego.add.audio('audioExplo');
		audioExplosion.allowMultiple = true;
		audioExplosion.addMarker('ae', 0, 2,0.6);

		//Agraga el mensaje del fin del juego y reinicio
		textReiniciar = "";
		textoFin = "";

		//Inicializacion de variables basicas del juego
		vidasCantidad = 1;
		valorVidasCanti = 20;
		movimientosEnemigo = [[0,1],[1,0],[-1,0],[1,1],[-1,1]];
		tiempoCreacion = 0;
	 	timeCrea = 200;
	 	valorCrea = 10;
		puntaje = 0;
		vidasNave = 3;
		escudo = false;
	},

	//Funcion que actualiza los estados del juego
	update: function(){
		fondoJuego.tilePosition.y += 1;
		for(var key in enemies){
			juego.physics.arcade.overlap(disparo, enemies[key].ovni, bulletHitEnemy,  null, this);
			enemies[key].update();	
			juego.physics.arcade.overlap(nave, enemies[key].ovni, 	naveHitEnemy, null, this);
			enemies[key].update();	
			if(juego.time.now - tiempoEscudo > 2000){
				escudo = false;
				escudoImg.position.x = -100;
				escudoImg.position.y = -100;
			}
		}
		
		crearEnemigos();
		movimientosNave();
		tiempoCreacion += 1;
		enemiesLenght = 0;
		for(key in enemies){enemiesLenght += 1;}
		
		disparosNave();
		finDelJuego();
	},

	//Funcion que agregar texto del puntaje
	render: function(){
		juego.debug.text('Puntaje: ' + puntaje, 0, 15);
		//juego.debug.text('Enemigos: ' + enemiesLenght, 0, 32);
		juego.debug.text('Vidas: ' + vidasNave, 0, 32);
		juego.debug.text(textoFin, 100, 250, "#fff", "40px Arial");
		juego.debug.text(textReiniciar, 170, 300, "#fff", "20px Arial");
		juego.debug.text(textPause, 180, 300, "#fff", "40px Arial");
	}
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');