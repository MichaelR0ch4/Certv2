 //Variaveis Primordiais Globais
  var nomecurso,cargahoraria,aproveitamento;
  var cidade,mesinicio,mesencerramento;
  var cursoinicio,cursoencerramento;
  var anoemissao,certverso_chk;
  //Variaveis do editor
  var area,area1,area2,area3;
  
  //NICK EDITOR
  bkLib.onDomLoaded(function() {

   area = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area');
    area1 = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area1');
    area2 = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area2');
    area3 = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area3');
  });
  //]]>
var sf,ss,st;
sf =0;
ss =0;
st =0;
function ocultarnomes(){
   $('#first').toggle()
   if(sf =0){
   document.getElementById('first').style.width = "100%"
    sf =1;
   }else{
   document.getElementById('first').style.width = "33.3%"
    sf =0;
   }
  
  
}

function ocultarcpf(){
   $('#second').toggle()
   if(ss =0){
   document.getElementById('second').style.width = "100%"
    ss =1;
   }else{
   document.getElementById('second').style.width = "33.3%"
    ss =0;
   }
  
   
}

function ocultarconteudo(){
   $('#third').toggle()
    if(st =0){
   document.getElementById('third').style.width = "100%"
    st =1;
   }else{
   document.getElementById('third').style.width = "33.3%"
    st =0;
   }
  
}

function exibirtudo(){
   $('#first,#second,#third').toggle()
    document.getElementById('embol').style.height = "450px;"

}

function desab(){
area.removeInstance('area');
area1.removeInstance('area1');
area2.removeInstance('area2');
area3.removeInstance('area3');
}

function hab(){
 area = new nicEditor({fullPanel : true}).panelInstance('area');
 area1 = new nicEditor({fullPanel : true}).panelInstance('area1');
 area2 = new nicEditor({fullPanel : true}).panelInstance('area2');
 area3 = new nicEditor({fullPanel : true}).panelInstance('area3');
}

function redim(){
 document.getElementById('first').style.width = "33.3%"
 document.getElementById('second').style.width = "33.3%"
 document.getElementById('third').style.width = "33.3%"

 
 document.getElementById('area').style.width = "100%"
 document.getElementById('area1').style.width = "100%"
 document.getElementById('area2').style.width = "100%"
 document.getElementById('area').style.height = "200px"
 document.getElementById('area1').style.height = "200px"
 document.getElementById('area2').style.height = "200px"
 
 

 
 document.getElementById('embol').style.height = "450px;"


}

// FIM NICK EDITOR


// SOFTWARE


// Pega os valores inseridos nos campos de texto
function capturardados(){
nomecurso = document.getElementById("curso").value;
cargahoraria = document.getElementById("cargahoraria").value;
aproveitamento = document.getElementById("aproveitamento").value;
cidade = document.getElementById("cidade").value;
mesinicio = document.getElementById("mesinicio").value;
mesencerramento = document.getElementById("mesencerramento").value;
cursoinicio = document.getElementById("cursoinicio").value;
cursoencerramento = document.getElementById("cursoencerramento").value;
anoemissao = document.getElementById("anoemissao").value;
//certverso_chk = document.getElementById("certverso_chk").value;
//alert(nomecurso + "|" + cargahoraria + "|" + aproveitamento + "% |" + cidade + "|" + mesinicio + "|" + mesencerramento + "|" + cursoinicio + "|" + cursoencerramento + "|" + anoemissao + "|" + certverso_chk);
}

//verificar se campos são vazios
function verificar(){
capturardados();
if(nomecurso == null || nomecurso==""){
alert("Preencha [NOME DO CURSO ] campo vazio ou nulo !! confira o campo.");
}else{

if(cargahoraria == null || cargahoraria==""){
alert("Preencha [CARGA HORARIA] campo vazio ou nulo !! confira o campo.");
}else{

if(aproveitamento == null || aproveitamento==""){
alert("Preencha [APROVEITAMENTO] campo vazio ou nulo !! confira o campo.");
}else{

if(cursoinicio == null || cursoinicio==""){
alert("Preencha [CURSO DATA DE INICIO] campo vazio ou nulo !! confira o campo.");
}else{


if(cursoencerramento== null || cursoencerramento==""){
alert("Preencha [CURSO ENCERRAMENTOs] campo vazio ou nulo !! confira o campo.");
}else{
//alert("Dados preenchidos gerando certificados!" + "\n" + "Sistemas Soluções Enfermagem ~ 2023" + "\n" + "Versão: 1.36 por MS Dev");
desab();
certificadogen();
}}}}}

}//verificar fim




var cpfanterior,nomeanterior;
// Função para criar e remover canvas para cada linha
function certificadogen() {
  var textarea = document.getElementById("area");
  var text2 = document.getElementById("area1");
  var linhas = textarea.value.split("\n");
  var lincpf = text2.value.split("\n");
    //Variaveis do Certificado
   // var nomes = $("#area").val();
   // var txtcpf = $("#area1").val();
    var frente = $("#area2").val();
    var verso = $("#area3").val();
	//ALTERAÇÃO DE VALORES FIXOS DE EMISSÃO DE CERTIFICADO
	frente = frente.replace("$[CURSO]", nomecurso);
	frente = frente.replace("$[APROVEITAMENTO]", aproveitamento);
	frente = frente.replace("$[CARGA_HORARIA]", cargahoraria);
	frente = frente.replace("$[MES_INICIO]", mesinicio);
	frente = frente.replace("$[MES_FIM]", mesencerramento);
	frente = frente.replace("$[DATA_INICIO]", cursoinicio);
	frente = frente.replace("$[DATA_FIM]", cursoencerramento);
	frente = frente.replace("$[ANO_EMISSAO]", anoemissao);
	
  
   // Lista de Canvas
  var canvasList = document.querySelectorAll("canvas");

  for (var i = 0; i < linhas.length; i++) {

    // Trocar Nome e CPF
    frente = frente.replace("$[ALUNO]", linhas[i]);
    frente = frente.replace("$[CPF]", lincpf[i]);
	frente = frente.replace(linhas[i - 1], linhas[i]);
    frente = frente.replace(lincpf[i -1], lincpf[i]);

	
	
    // Criar um novo elemento de canvas
    var canvas = document.createElement("canvas");
    canvas.style = "border:1px solid black; ";
    canvas.setAttribute("width", "3508");
    canvas.setAttribute("height", "2481");
    canvas.id = "canvas" + i;

    //CHAMAR FUNÇÃO RENDER (css): word-spacing:-20px;
    var html = '<div style="margin-top:26%; margin-left:6%; margin-right:6%;  font-family: Candara; font-size: 90px; font-style: normal; font-variant: normal; text-align: justify; white-space: pre-line; text-align-last: justify; ">' +frente + '                                </div>';
    renderFrente(canvas, html);
	

	  // Adicionar o canvas à página
    document.body.appendChild(canvas)
    
  }
  
  
   /* for (var i = 0; i < canvasList.length; i++) {
    // Remover cada elemento de canvas
   // canvasList[i].remove();
  })*/
  
  
}

//GERAR O TEXTO E O FUNDO

// Função para renderizar HTML em um elemento <canvas>
function renderFrente(canvas, html) {
  var ctx = canvas.getContext("2d");

  var svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
    </foreignObject>
  </svg>`;

  var svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  var svgObjectUrl = URL.createObjectURL(svgBlob);

  var bgimg = new Image();
  var tempImg = new Image();

  tempImg.addEventListener("load", function () {
    ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempImg, 0, 0);
    ctx.font = "70px Arial";
    const date = new Date().toLocaleDateString("pt-PT");
    ctx.fillText(cidade + ", " + date, 2300, 1600);
    URL.revokeObjectURL(svgObjectUrl);
   

	
  
  });
 bgimg.src = "img/modelo.jpg";
    tempImg.src = svgObjectUrl;
	
		// Download Image as JPG
bgimg.onload = function() {	
	downloadImage(canvas, "Teste.jpeg");
}	

 
  
}


const downloadImage = (canvas, imageName) => {
    canvas.toBlob((blob) => {
        const anchor = document.createElement('a');
        anchor.download = imageName;
        anchor.href = URL.createObjectURL(blob);

        anchor.click(); 

        URL.revokeObjectURL(anchor.href); // remove it from memory and save on memory!
    }, 'image/jpeg');
};


// Chamada da função para baixar o canvas com ID "meuCanvas" como imagem JPG
//canvasJPG("meuCanvas", "minhaImagem");

