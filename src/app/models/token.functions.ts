//FUNCION PARA CHECKEAR SI SE ESTA LOGEADO
export function checkToken(router: any){
    if(localStorage.getItem('token') == null){
        router.navigate(['login']);
    }
}

//FUNCION PARA BORRAR EL LOGIN EN EL LOCAL STORAGE
export function logOut(router: any){
    localStorage.removeItem('token');
    router.navigate(['login']);
}