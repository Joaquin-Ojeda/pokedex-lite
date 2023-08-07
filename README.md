Primero que nada buenos dias y muchísimas gracias por darme esta oportunidad para demostrar mis conocimientos.
A continuación, detallare algunos aspectos que me parecieron importantes remarcar antes de ir al código.

1. No me pude conectar a la API que me enviaron, así que utilicé la PokeAPI para sacar la información de los Pokémon y sus evoluciones. 

2. Utilice Bootstrap para agilizar los estilos del proyecto.

3. La única parte del proyecto que no pude realizar fue la de agregar evoluciones a un Pokémon existente, ya que la API de evoluciones me trajo varios problemas y por lo tanto no llegué a realizar dicha parte.

Pasando un poco a como pensé que debía funcionar la aplicación:

1. Primero que nada el usuario deberá logearse en la página de inicio, si ya se encontraba logeado desde antes, entonces se lo llevará a la página principal "dashboard" (Debería ser Home pero termino siendo dashboard por un error).

2. En la página de logeo se podrá ingresar usuario y contraseña, si alguna de estas es incorrecta se mostrará el mensaje de "Usuario/Password incorrect" (Sin especificar cuál de las dos es incorrecta por motivos de seguridad) en cambio, si se dejan los campos vacíos se mostrará el mensaje de "Please complete the required inputs" y no se lo dejará logear, lo mismo pasa con el caso de usuario o contraseña incorrectos. Al ingresar con éxito, se guardará un token en el Local Storage para corroborar que el usuario este logeado y poder consumir la aplicación. (Por si acaso aclaro que, al no poder conectarme a la API entregada, los usuarios los guarde de manera estática en la carpeta "data" archivo "usuarios-data.ts").

3. Una vez en el "Home" se podrá ver un header con el nombre de la aplicación, funcionando como botón para redireccionar al home, y 2 botones, "New" y "Log out", pero primero vamos a la parte principal, los Pokémons. Se podrá ver en pantalla la lista entera de los Pokémons existentes (En este caso solo use la primer generación, es decir, los primeros 150 Pokémons, aun que se puede ingresar a los datos de cualquier Pokémon utilizando la dirección "/pokemon/{id del pokemon}"). Los Pokémons resaltados en verde serán los que el usuario ya haya ingresado y tendrán la información con la que los ingreso, es decir, el nivel al que se encuentra. El resto se mostrarán con "??" en la parte del lvl ya que aún no los ha encontrado. También se encontrará un botón "My Pokedex" que realizará la misma lista en pantalla, pero solo con los Pokémons encontrados por el usuario.

4. Al hacer click en algún Pokémon se lo llevara al detalle de dicho Pokémon. Alli se podra ver la informacion y, en caso de tener dicho Pokémon, se podrá editar su información para cambiar nombre, tipos y nivel. También se podrá volver a la pokedex global o a "my pokedex" con los botones correspondientes.

5. Llegando ya al final se podrá realizar la agregación de un Pokémon a nuestra lista de pokes. Si se clickea el botón "New" del header, lo llevara hacia una vista similar a la de los detalles del Pokémon, solo que aquí nos dejara ingresar el nombre del Pokémon que queremos agregar y el nivel en el que se encuentra. Respetando que si el nombre de dicho Pokémon no existe en la API entonces no se podrá agregar, al igual que si ingresamos un level no valido (0 < level <= 100). Al agregar un Pokémon valido se podrá apreciar en la lista, tanto de la pokedex como de mi pokedex.

6. El botón del header "Log out" será el encargado de limpiar ese token almacenado en Local Storage y así redirigir siempre a la página de login, sin poder acceder a los datos de los Pokémons.

7. Para finalizar debo aclarar que al refrescar la página los datos cambiados, al ser estáticos, se perderán y volverán a su estado original, respetando lo mencionado en puntos anteriores. Además, últimamente estaba probando la página desde el navegador Opera GX y en la última actualización, los colores, por algún motivo que desconozco, se invirtieron. Por lo tanto, debí seguir con Google Chrome para poder ver bien los estilos y colores del proyecto.

Desde ya muchas gracias por su tiempo.