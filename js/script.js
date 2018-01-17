// tworzymy klase Button, ma za zadanie tworzyc nowe przyciski na naszej stronie

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

// tworzymy pierwsza instancje

var btn1 = new Button('Hello!');

// wywolujemy metode create w celu stworzenia elementu

btn1.create();