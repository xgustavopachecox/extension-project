
const texts = {
    pt: {
        sobreMim: "Sobre Mim",
        introducao: `Olá! Meu nome é Gustavo Pacheco, sou estudante de Sistemas de Informação no IFSP. Tenho uma paixão por tecnologia e programação, e estou constantemente aprimorando minhas habilidades em desenvolvimento web. Atualmente, estou focado em aprender e trabalhar com tecnologias como React, JavaScript, PHP e MySQL, com o objetivo de me tornar um desenvolvedor fullstack.
        Além disso, tenho experiência com projetos acadêmicos e profissionais que envolvem desde o front-end até o back-end. Gosto de desafios e de aprendizados constantes. Fora da programação, sou uma pessoa que valoriza o equilíbrio entre trabalho e vida pessoal, e tenho como meta alcançar um estilo de vida tranquilo e saudável.`,
        
    },
    en: {
        sobreMim: "About Me",
        introducao: `Hello! My name is Gustavo Pacheco, I am a student of Information Systems at IFSP. I have a passion for technology and programming, and I am constantly improving my skills in web development. Currently, I am focused on learning and working with technologies such as React, JavaScript, PHP, and MySQL, with the goal of becoming a fullstack developer.
        Furthermore, I have experience with academic and professional projects involving both front-end and back-end. I enjoy challenges and continuous learning. Outside programming, I value work-life balance and aim for a peaceful and healthy lifestyle.`,
    }
};

let currentLanguage = "pt";

function toggleLanguage() {
    currentLanguage = currentLanguage === "pt" ? "en" : "pt"; 

    document.querySelector("#sobre-mim h2").innerText = texts[currentLanguage].sobreMim;
    document.querySelector("#sobre-mim .texto").innerHTML = texts[currentLanguage].introducao;
}

document.getElementById("linguagem").addEventListener("click", toggleLanguage);
