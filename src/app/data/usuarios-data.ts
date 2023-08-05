import { Usuario } from './../models/usuario'
export const Usuarios: Usuario[] =[
    {
        name: 'trainer',
        password: 'password',
        pokemons_vistos: [ 
            {id:4, lvl:1},
            {id:10, lvl:5},
            {id:1, lvl:15}
        ]
    },
    {
        name: 'master',
        password: 'password',
        pokemons_vistos: [ 
            {id:6, lvl:36},
            {id:10, lvl:5}
        ]
    }
]