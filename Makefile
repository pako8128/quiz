all: public/styles/style.css

public/styles/style.css: styles/style.scss
	sassc styles/style.scss public/styles/style.css
