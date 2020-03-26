import sizes from './sizes';
import bg from './bg.svg';

export default {
	"@global": {
		".fade-exit": {
			opacity: 1
		},
		".fade-exit-active" : {
			opacity: 0,
			transition: "opacity 500ms ease-out"
		}
	},
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
		alignItems: "flex-start",
		// background by SVGBackgrounds.com
		backgroundColor: "#ffff00",
		backgroundImage: `URL(${bg})`,
		overflow: "scroll"
	},
	heading: {
		fontSize: "2rem"
	},
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem"
        }
    }
};