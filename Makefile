all: public/styles/style.css public/styles/options.css

public/styles/style.css: styles/style.scss
	sassc styles/style.scss public/styles/style.css

public/styles/options.css: styles/options.scss
	sassc styles/options.scss public/styles/options.css

