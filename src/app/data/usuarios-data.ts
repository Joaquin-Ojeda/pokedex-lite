import { Usuario } from './../models/usuario'
export const Usuarios: Usuario[] =[
    {
        name: 'trainer',
        password: 'password',
        pokemons_vistos: [ 
            {id:1, lvl:15},
            {id:15, lvl:20},
            {id:16, lvl:12},
            {id:19, lvl:12}
        ]
    },
    {
        name: 'master',
        password: 'password',
        pokemons_vistos: [ 
            {id:6, lvl:100},
            {id:18, lvl:100},
            {id:112, lvl:100},
            {id:131, lvl:100},
            {id:149, lvl:100},
            {id:150, lvl:100}
        ]
    }
]