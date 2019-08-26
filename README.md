# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Proyecto Cifrado César

Mas de alguna vez hemos tenido la necesidad de cifrar un mensaje, ya sea para proteger el contenido, entreternos un rato o simple curiosidad. Resolviendo esta carencia se crea Mensaje Secreto, una página web donde el usuario puede elegir una clave númerica para cifrar/descifrar mensajes, escribir mensajes alfabéticos y posteriormente cifrarlos/descifrarlos. La utilidad de esta página traspasa las edades, tanto niños, jóvenes, adultos y ancianos pueden usarla. Sólo es necesario estar alfabetizado, es un requisito fundamental para el correcto uso de la herramienta. Mensaje Secreto ofrece una solución rápida para el cifrado/descifrado de mensajes


## Producto

La aplicación web tiene un diseño simple y amigable, compuesta de solo una pagina donde el usuario observa en un comienzo el nombre de la web, una breve descripción de la herramienta y las correspondientes instrucciones de uso. Luego viene toda la interación, en primer lugar el usuario debe ingresar un número, que permita encriptar el mensaje que el mismo debe escribir o insertar, en un elemento textarea, para luego dar la acción de cifrar, por medio de un botón, finalmente el usuario obtiene su mensaje cifrado, que es mostrado en otro elemento textarea. La visualización y ejecución de el descifrado sigue el mismo diseño y lógica. 

## Interfaz de usuario (UI)

La interfaz de la aplicación permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter, esta acción se lleva a cabo ingresando un número por medio de un input, y dando click al botón "Aplicar".
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.





