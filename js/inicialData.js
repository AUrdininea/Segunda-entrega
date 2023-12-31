const cardStart = [
    {
        id: "1",
        imagen: "/assets/images/products/Menphis-gibson.jpg",
        title: 'Gibson Les Paul "Custom"',
        info: "Con su icónica forma Les Paul y construcción de arce y caoba, esta guitarra ofrece un tono cálido y resonante que se adapta a muchos estilos",
        description: "Esta guitarra de seis cuerdas cuenta con una escala de 24.75 pulgadas y 22 trastes, lo que permite una gran versatilidad en la ejecución de diferentes técnicas y estilos. Además, la construcción set-in del mástil y el puente fijo garantizan una excelente estabilidad y sustain en cada nota que toques.",
        dateCard: new Date('21/08/2023' + 'T00:00:00-03:00').getTime(),
        price: 2405400,
        category: "Gibson Line"
    },  
    {
        id: "2",
        imagen: '/assets/images/products/Black-Les-Paul.JPG',
        title: 'Gibson Les Paul "Classic"',
        info: 'Con su cuerpo de arce y caoba, esta guitarra ofrece un tono cálido y equilibrado.El diapasón de palo de rosa y el mástil de caoba.',
        description: "Los 22 trastes ofrecen un amplio rango para explorar diferentes estilos y técnicas, y los dos micrófonos humbucker Burstbucker Pro Rhythm y Pro Lead garantizan un sonido potente y claro en cualquier situación.La construcción set-in del mástil asegura una excelente                              estabilidad y sustain.",
        dateCard: new Date('21/08/2023' + 'T00:00:00-03:00').getTime(),
        price: 3240000,
        category: "Gibson line"
    },
    {
        id: "3",
        imagen: '/assets/images/products/sparling-2.JPG',
        title: 'Gibson Les Paul "Burgundy',
        info: 'Esta Les Paul cuenta con pastillas, tono independiente y controles de volumen para cada elemento, lo que produce distintos resultados.',
        description: 'Su madera de caoba la hace un producto versátil y popular. El tono viene marcado por la calidez y equilibrio, con agudos suaves y cargados matices armónicos. El valor de sus productos resalta por su calidad e innovación.Una forma para cada estilo musical y material versátil.',
        dateCard: new Date('21/08/2023' + 'T00:00:00-03:00').getTime(),
        price: 2840000,
        category: "Gibson Line"
    },
    {
        id: "4",
        imagen: '/assets/images/products/Telecaster.JPG',
        title: 'Fender Player Plus "Telecaster"',
        info: 'Rápido y cómodo, el perfil "C" moderno se adapta a todos los estilos de interpretación, y el acabado satinado brinda una sensación lujosa que es         suave.',
        description: 'Con el estilo clásico de Fender, funciones avanzadas y nuevos acabados impresionantes, la Player Plus Nashville Telecaster es la herramienta perfecta para despertar tu creatividad y destacar entre la multitud.Con agudos brillantes, medios balanceados y bajos suaves.',
        dateCard: new Date('2023-08-04' + 'T00:00:00-03:00').getTime(),
        price: 3250315,
        category: "Fender Line"
    },
    {
        id: "5",
        imagen: '/assets/images/products/Fender-Player-stratocaster.JPG',
        title: 'Fender Player "Stratocaster"',
        info: 'Eric Clapton es el representante de este instrumento, por lo que es ideal para estilos como el rock y el blues.',
        description: 'Esta Stratocaster es el máximo referente de las guitarras a lo largo de su historia. Cuenta con pastillas que incluyen selectores, tonos y volumen máster. Tiene un sonido cálido, cristalino, percusivo y con mucha textura. Su madera de aliso tiene una densidad media que da un sonido equilibrado.',
        dateCard: new Date('2023-01-31' + 'T00:00:00-03:00').getTime(),
        price: 2223531,
        category: "Fender Line"
    },
    {
        id: "6",
        imagen: '/assets/images/products/Jazz-Master.JPG',
        title: 'Fender "Jazzmaster"',
        info: 'Esta poderosa encarnación híbrida de la Jazzmaster representa la siguiente fase en el camino de innovación de Fender.', 
        description: 'Los aspectos más destacados incluyen un cuerpo delgado y liviano, un perfil de mástil en forma de "C" fácil de tocar, pastillas Humbucking dobles Squier con conmutación de 3 vías para una variedad sónica y un puente rígido para una estabilidad de afinación sólida.',
        dateCard: new Date('2023-12-31' + 'T00:00:00-03:00').getTime(),
        price: 3400650,
        category: "Fender Line"
    },
    {
        id: "7",
        imagen: '/assets/images/products/fender-1.jpg',
        title: 'Fender "Player Plus"',
        info: 'Esta poderosa encarnación híbrida de la Jazzmaster representa la siguiente fase en el camino de innovación de Fender.',
        description: 'Los aspectos más destacados incluyen un cuerpo delgado y liviano, un perfil de mástil en forma de "C" fácil de tocar, pastillas Humbucking dobles Squier con conmutación de 3 vías para una variedad sónica y un puente rígido para una estabilidad de afinación sólida.',
        dateCard: new Date('21/08/2023' + 'T00:00:00-03:00').getTime(),
        price: 3720650,
        category: "Fender Line"
    }


];

const usersStart = [
    {
        fullname: 'Admin',
        age: 30,
        email: 'Admin@admin.com',
        id: '1',
        active: true,
        password: 'Admin',
        bornDate: new Date('1993-01-01').getTime(),
        location: 'Buenos Aires',
        image: 'https://gameriv.com/wp-content/uploads/2020/11/Untitled-1-37.jpg',
        role: 'ADMIN_ROLE'
    },
    {
        fullname: 'Jane',
        age: 25,
        email: 'jane.doe@example.com',
        id: '2',
        active: false,
        password: 'password456',
        bornDate: new Date('1998-05-05').getTime(),
        location: 'Mendoza',
        image: 'https://e0.pxfuel.com/wallpapers/313/768/desktop-wallpaper-cool-fortnite-skins-fortnite-weapon-skin-dope-fortnite.jpg',
        role: "USER_ROLE"
    },
    {
        fullname: 'Alice',
        age: 35,
        email: 'alice.johnson@example.com',
        id: '3',
        active: true,
        password: 'password789',
        bornDate: new Date('1988-08-08').getTime(),
        location: 'Buenos Aires',
        image: 'https://www.ggrecon.com/media/tt3c5wae/fortnite-outfit-brite-bomber-816x853.jpg?mode=crop&width=682&quality=80&format=webp',
        role: "USER_ROLE"
    },
    {
        fullname: 'Michael',
        age: 40,
        email: 'michael.smith@example.com',
        id: '4',
        active: false,
        password: 'password101',
        bornDate: new Date('1983-04-10').getTime(),
        location: 'San Luis',
        image: 'https://tryhardguides.com/wp-content/uploads/2021/09/featured-fortnite-legendary-skins.jpg',
        role: "USER_ROLE"
    },
    {
        fullname: 'Jhonn',
        age: 28,
        email: 'emily.johnson@example.com',
        id: '5',
        active: true,
        password: 'password202',
        bornDate: new Date('1995-02-15').getTime(),
        location: 'San Luis',
        image: 'https://pm1.aminoapps.com/7873/316cc14f04f85d0581990ede97324ffe87fc283ar1-1080-1080v2_uhq.jpg',
        role: "USER_ROLE"
    },
    {
        fullname: 'Dan',
        age: 34,
        email: 'daniel.lee@example.com',
        id: '6',
        active: false,
        password: 'password303',
        bornDate: new Date('1989-07-07').getTime(),
        location: 'Mendoza',
        image: 'https://fortnite.gg/img/items/9989/bg.jpg?3',
        role: "USER_ROLE"
    },
    
];


// Seteo las cards iniciales 
if (localStorage.getItem("cards") === null) {
    localStorage.setItem("cards", JSON.stringify(cardStart))
}
const cardArray = JSON.parse(localStorage.getItem("cards"));

// Seteo los usuarios iniciales 
if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart))
}
const usersArray = JSON.parse(localStorage.getItem("users"));

