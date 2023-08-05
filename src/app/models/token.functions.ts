export function checkToken(router: any){
    if(localStorage.getItem('token') == null){
        router.navigate(['login']);
    }
}
export function logOut(router: any){
    localStorage.removeItem('token');
    router.navigate(['login']);
}