const arrayDiscos = [

    {
        id: '1',
        nombre: 'Sinfonía No. 9',
        artista: 'Ludwig Van Beethoven',
        lanzamiento: '1951',
        genero: 'clasica',
        pais: 'alemania'
    },
    {
        id: '2',
        nombre: 'A banda do Zé Pretinho',
        artista: 'Jorge Ben Jor',
        lanzamiento: '1978',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '3',
        nombre: 'Joao Gilberto',
        artista: 'Joao Gilberto',
        lanzamiento: '1973',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '4',
        nombre: 'Os Afro-Sambas',
        artista: 'Baden Powell',
        lanzamiento: '2005',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '5',
        nombre: 'El amor despues del amor',
        artista: 'Fito Paez',
        lanzamiento: '1992',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '6',
        nombre: 'Wagner:Götterdämerung',
        artista: 'Richard Wagner',
        lanzamiento: '2013',
        genero: 'opera',
        pais: 'alemania'
    },

    {
        id: '7',
        nombre: 'Caetano Veloso',
        artista: 'Caetano Veloso',
        lanzamiento: '1986',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '8',
        nombre: 'Giros',
        artista: 'Fito Paez',
        lanzamiento: '1985',
        genero: 'Rock',
        pais: 'argentina'
    },
    {
        id: '9',
        nombre: 'Wagner: Tristan und Isolde',
        artista: 'Richard Wagner',
        lanzamiento: '1966',
        genero: 'opera',
        pais: 'argentina'
    },
    {
        id: '10',
        nombre: 'Live at Umbria Jazz',
        artista: 'Joao Gilberto',
        lanzamiento: '2021',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '11',
        nombre: 'Asondeguerra Tour',
        artista: 'Juan Luis Guerra',
        lanzamiento: '2013',
        genero: 'merengue',
        pais: 'republica-dominicana'
    },
    {
        id: '12',
        nombre: 'Tchaikovsky:Swan Lake',
        artista: 'Pyotr Ilyich Tckaikovski',
        lanzamiento: '2002',
        genero: 'clasica',
        pais: 'rusia'
    },
    {
        id: '13',
        nombre: 'Seventh Son of a Seventh Son',
        artista: 'Iron Maiden',
        lanzamiento: '1988',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '14',
        nombre: 'La La La',
        artista: 'Fito Paez',
        lanzamiento: '1986',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '15',
        nombre: 'Oktubre',
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        lanzamiento: '1986',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '16',
        nombre: 'Gulp!',
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        lanzamiento: '1985',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '17',
        nombre: 'good kid, m.A.A.d city',
        artista: 'Kendrick Lamar',
        lanzamiento: '2012',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '18',
        nombre: '2014 Forest Hills Drive',
        artista: 'J. Cole',
        lanzamiento: '2014',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '19', 
        nombre: 'Illmatic',
        artista: 'Nas',
        lanzamiento: '1994',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '20',
        nombre: 'Solo Monk ',
        artista: 'Thelonious monk',
        lanzamiento: '1964',
        genero: 'jazz',
        pais: 'estados-unidos'
    },
    {
        id: '21',
        nombre: 'The Score',
        artista: 'Fugees',
        lanzamiento: '1996',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '22',
        nombre: 'Matasano',
        artista: 'Roberto Firpo',
        lanzamiento: '2019',
        genero: 'tango',
        pais: 'argentina'
    },
    {
        id: '23',
        nombre: 'Nave Maria',
        artista: 'Tom Zé',
        lanzamiento: '1984',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '24',
        nombre: 'The Head On the Door',
        artista: 'The Cure',
        lanzamiento: '1985',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '25',
        nombre: 'Amanecer Búho',
        artista: 'Buenos Muchachos',
        lanzamiento: '2003',
        genero: 'rock',
        pais: 'uruguay'
    },
    {
        id: '26',
        nombre: 'Sur',
        artista: 'Jaime Roos',
        lanzamiento: '1987',
        genero: 'rock',
        pais: 'uruguay'
    },
    {
        id: '27',
        nombre: 'Siempre son las cuatro',
        artista: 'Jaime Roos',
        lanzamiento: '1982',
        genero: 'rock',
        pais: 'uruguay'
    },
    {
        id: '28',
        nombre: 'Aquello',
        artista: 'Jaime Roos',
        lanzamiento: '1981',
        genero: 'rock',
        pais: 'uruguay'
    },
    {
        id: '29',
        nombre: 'Tonadas',
        artista: 'Simón Díaz',
        lanzamiento: '1974',
        genero: 'folklore',
        pais: 'venezuela'
    },
    {
        id: '30',
        nombre: 'Puccini: Turandot',
        artista: 'Giacomo Puccini',
        lanzamiento: '1982',
        genero: 'opera',
        pais: 'italia'
    },
    {
        id: '31',
        nombre: 'London Calling',
        artista: 'The Clash',
        lanzamiento: '1979',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '32',
        nombre: 'Luzbelito',
        artista: 'Patricio rey y sus Redonditos de Ricota',
        lanzamiento: '1996',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '33',
        nombre: 'La Mosca y la Sopa',
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        lanzamiento: '1991',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '34',
        nombre: 'Artaud',
        artista: 'Pescado Rabioso',
        lanzamiento: '1973',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '35',
        nombre: 'Piano Bar',
        artista: 'Charly garcía',
        lanzamiento: '1984',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '36',
        nombre: 'Clics Modernos',
        artista: 'Charly García',
        lanzamiento: '1983',
        genero: 'rock',
        pais: 'argentina'
    },
    {
        id: '37',
        nombre: 'La Trampera',
        artista: 'Aníbal Troilo',
        lanzamiento: '2012',
        genero: 'tango',
        pais: 'argentina'
    },
    {
        id: '38',
        nombre: 'Troilo Grela',
        artista: 'Roberto Grela',
        lanzamiento: '2013',
        genero: 'tango',
        pais: 'argentina'
    },
    {
        id: '39',
        nombre: 'Festa no Sertao',
        artista: 'Dominguinhos',
        lanzamiento: '1973',
        genero: 'forro',
        pais: 'brasil'
    },
    {
        id: '40',
        nombre: 'Cada um Belisca um Pouco',
        artista: 'Dominguinhos',
        lanzamiento: '2003',
        genero: 'forro',
        pais: 'brasil'
    },
    {
        id: '41',
        nombre: 'Wagner: Parsifal',
        artista: 'Richard Wagner',
        lanzamiento: '1973',
        genero: 'opera',
        pais: 'alemania'
    },
    {
        id: '42',
        nombre: 'Show',
        artista: 'Frankie Ruiz',
        lanzamiento: '1996',
        genero: 'salsa',
        pais: 'puerto-rico'
    },
    {
        id: '43',
        nombre: 'Wave',
        artista: 'Antonio Carlos Jobim',
        lanzamiento: '1967',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '44',
        nombre: 'Alô malandragem maloca o Flagrante',
        artista: 'Bezerra Da Silva',
        lanzamiento: '1986',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '45',
        nombre: 'Cole World: The sideline story',
        artista: 'J. cole',
        lanzamiento: '2011',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '46',
        nombre: 'Esto fue lo que trajo el barco',
        artista: 'ismael Rivera',
        lanzamiento: '1972',
        genero: 'salsa',
        pais: 'puerto-rico'
    },
    {
        id: '47',
        nombre: 'Combat Rock',
        artista: 'The Clash',
        lanzamiento: '1982',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '48',
        nombre: 'The Payback',
        artista: 'James Brown',
        lanzamiento: '1973',
        genero: 'funk',
        pais: 'estados-unidos'
    },
    {
        id: '49',
        nombre: 'Tijuana Moods',
        artista: 'Charles Mingus',
        lanzamiento: '1962',
        genero: 'jazz',
        pais: 'estados-unidos'
    },
    {
        id: '50',
        nombre: 'Elis & Tom',
        artista: 'Elis Regina, Antônio Carlos Jobim',
        lanzamiento: '1974',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '51',
        nombre: 'Paranoid',
        artista: 'Black Sabbath',
        lanzamiento: '1970',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '52',
        nombre: 'Rock in Rio (Live)',
        artista: 'Iron Maiden',
        lanzamiento: '2002',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '53',
        nombre: 'Iron Maiden',
        artista: 'Iron Maiden',
        lanzamiento: '1980',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '54',
        nombre: 'The Scream',
        artista: 'Siouxsie and the Banshees',
        lanzamiento: '1978',
        genero: 'rock',
        pais: 'Inglaterra'
    },
    {
        id: '55',
        nombre: 'Close to the Edge',
        artista: 'Yes',
        lanzamiento: '1972',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '56',
        nombre: 'Mask',
        artista: 'Bauhaus',
        lanzamiento: '1981',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '57',
        nombre: 'Physical Graffiti',
        artista: 'Led Zepellin',
        lanzamiento: '1975',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '58',
        nombre: 'Made in Japan',
        artista: 'Deep Purple',
        lanzamiento: '1972',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '59',
        nombre: 'The miseducation of Lauryn Hill',
        artista: 'Lauryn Hill',
        lanzamiento: '1998',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '60',
        nombre: 'In the flat field',
        artista: 'Bauhaus',
        lanzamiento: '1980',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '61',
        nombre: 'Tinderbox',
        artista: 'Siouxsie and the banshees',
        lanzamiento: '1986',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '62',
        nombre: 'Ok Computer',
        artista: 'Radiohead',
        lanzamiento: '1997',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '63',
        nombre: 'Disintegration',
        artista: 'The Cure',
        lanzamiento: 'mayo 2, 1989',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '64',
        nombre: 'Led Zepellin III',
        artista: '1970',
        lanzamiento: 'enero 1, 1970',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '65',
        nombre: 'Pearl',
        artista: 'Janis Joplin',
        lanzamiento: ' enero 11, 1971',
        genero: 'rock',
        pais: 'estados-unidos'
    },
    {
        id: '66',
        nombre: 'Adoniran Barbosa',
        artista: 'Adoniran Barbosa',
        lanzamiento: 'agosto 5, 1974',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '67',  
        nombre: 'Adoniran Barbosa',
        artista: 'Adoniran Barbosa',
        lanzamiento: 'enero 1, 1975',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '68',
        nombre: 'Yamandú + Dominguinhos',
        artista: 'Yamandú Costa',
        lanzamiento: 'septiembre 3, 2007',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '69',
        nombre: "Ol' Waylon",
        artista: 'Waylon Jennings',
        lanzamiento: '1977',
        genero: 'country',
        pais: 'estados-unidos'
    },
    {
        id: '70',
        nombre: 'Yamandú',
        artista: 'Yamandú Costa',
        lanzamiento: '2001',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '71',
        nombre: 'Kid A',
        artista: 'Radiohead',
        lanzamiento: '2000',
        genero: 'rock',
        pais: 'inglaterra'
    },
    {
        id: '72',
        nombre: 'Caetano',
        artista: 'Caetano Veloso',
        lanzamiento: '1987',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '73',
        nombre: 'Construcao',
        artista: 'Chico Buarque',
        lanzamiento: '1971',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '74',
        nombre: 'Chico Buarque de Hollanda Vol. 3',
        artista: 'Chico Buarque',
        lanzamiento: '1968',
        genero: 'bossa-nova',
        pais: 'brasil'
    },
    {
        id: '75',
        nombre: 'Zombie',
        artista: 'Fela Kuti',
        lanzamiento: '1976',
        genero: 'afro-beat',
        pais: 'nigeria'
    },
    {
        id: '76',
        nombre: 'Cartola',
        artista: 'Cartola',
        lanzamiento: '1976',
        genero: 'samba',
        pais: 'brasil'
    },
    {
        id: '77',
        nombre: 'Ready to Die',
        artista: 'Notorious B.I.G.',
        lanzamiento: '1994',
        genero: 'hip-hop',
        pais: 'estados-unidos'
    },
    {
        id: '78',
        nombre: 'Abbey Road',
        artista: 'The Beatles',
        lanzamiento: '1969',
        genero: 'rock',
        pais: 'inglaterra'
    },

]

export default arrayDiscos;