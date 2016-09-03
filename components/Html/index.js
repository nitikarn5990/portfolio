import React from 'react';

export default (props) => {
	let attrs = props.head && props.head.htmlAttributes.toComponent();
	return (
		<html {...attrs}>
			<head>
				<meta charSet="utf-8" />
				{props.head && props.head.title.toComponent()}
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{props.head && props.head.meta.toComponent()}
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600|Bree+Serif" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" integrity="sha384-gFTAvnQMdZ1wfeb9vay1SlC/c+jfgXz8qMUgAGRrTso3Q6f6J6qvcUOdYFuEP9cE" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css" type="text/css" integrity="sha384-iexT94C+awefX8jwGeXKk09qL7P8+robWXj/877zcs5kllUcayy+OtHhFDUzlOXc" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" type="text/css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossOrigin="anonymous" />
				<link href="/style.css" rel="stylesheet" type="text/css" />
                {props.head && props.head.link.toComponent()}
			</head>
			<body>
				<div id="app" dangerouslySetInnerHTML={{__html: props.html}}>{props.children}</div>
				<script src="/bundle.js"></script>
			</body>
		</html>
	);
};
