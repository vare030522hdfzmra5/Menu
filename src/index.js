import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {

	function menu(evt) {
		window.location = "--------";
  }

return (

    <div>
      <h1>Bienvenido</h1>
      <p1>Hola¡¡¡¡</p1>
      <p1>Gracias por participar en la version beta de esta maravillosa aplicaacion, de domento no contamos con muchas areas, pero esperamos que sean de su agrado con las que contamos, que lo disfrute:</p1>
     <ul>

<ul class="nav">
				
				<li><a href="">CATEGORIAS:</a>
					<ul>
						<li><a href="">Recargas y pagos de servicios<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6b0ec12-cde1-4f2c-b226-b845c744ad60/d475t2m-eeee18e6-a57e-479b-804e-5536840ba8bb.png/v1/fill/w_900,h_800,strp/fondo_blanco_en_png_by_rommisencion_d475t2m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYjZiMGVjMTItY2RlMS00ZjJjLWIyMjYtYjg0NWM3NDRhZDYwXC9kNDc1dDJtLWVlZWUxOGU2LWE1N2UtNDc5Yi04MDRlLTU1MzY4NDBiYThiYi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4ZyBNbQETE36V6fLaNIVnL9iEiZ5KY5OS_uBF3yVqT4" align="center" width="120" height="60" alt="" /></a></li>
						<li><a href=""> Entretenimiento <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6b0ec12-cde1-4f2c-b226-b845c744ad60/d475t2m-eeee18e6-a57e-479b-804e-5536840ba8bb.png/v1/fill/w_900,h_800,strp/fondo_blanco_en_png_by_rommisencion_d475t2m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYjZiMGVjMTItY2RlMS00ZjJjLWIyMjYtYjg0NWM3NDRhZDYwXC9kNDc1dDJtLWVlZWUxOGU2LWE1N2UtNDc5Yi04MDRlLTU1MzY4NDBiYThiYi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4ZyBNbQETE36V6fLaNIVnL9iEiZ5KY5OS_uBF3yVqT4" align="center" width="100" height="60" alt="" /></a></li>
            <li><a href=""> Trabajos realizados <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6b0ec12-cde1-4f2c-b226-b845c744ad60/d475t2m-eeee18e6-a57e-479b-804e-5536840ba8bb.png/v1/fill/w_900,h_800,strp/fondo_blanco_en_png_by_rommisencion_d475t2m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYjZiMGVjMTItY2RlMS00ZjJjLWIyMjYtYjg0NWM3NDRhZDYwXC9kNDc1dDJtLWVlZWUxOGU2LWE1N2UtNDc5Yi04MDRlLTU1MzY4NDBiYThiYi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4ZyBNbQETE36V6fLaNIVnL9iEiZ5KY5OS_uBF3yVqT4" align="center" width="100" height="60" alt="" /></a></li>
					
           
					</ul>
				</li>

       

			</ul>
      </ul>
			<button onClick={menu}>Cerrar sesion</button>
      </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
