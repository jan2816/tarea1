
const sinParametros = () => {
    console.log("Esta función no tiene parámetros.");
  };
  

  const conUnParametro = (parametro) => {
    console.log(`El parámetro es: ${parametro}`);
  };
  

  const conDosOMasParametros = (...parametros) => {
    console.log("Los parámetros son:");
    parametros.forEach(parametro => console.log(parametro));
  };
  

  const constante1 = "constante1";
  const constante2 = "constante2";
  const constante3 = "constante3";
  
  let variable1 = 1;
  let variable2 = "texto";
  let variable3 = true;
  let variable4 = [1, 2, 3];
  let variable5 = { nombre: "Juan", edad: 30 };
  