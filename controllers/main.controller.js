'use strinct';

class MainController {

	all(req, res, next) {
		res.json({ message: 'Metodo para visualizar toda la informacion' });
	}

	create(req, res, next) {
		res.json({ message: 'Se crea un nuevo log' });
	}

	info(req, res, next) {
		res.json({ message: 'Informacion del log' });
	}

	update(req, res, next) {
		res.json({ message: 'Modificacion del log' });
	}

	delete(req, res, next) {
		res.json({ message: 'Eliminacion del log' });
	}
}

module.exports = new MainController();
