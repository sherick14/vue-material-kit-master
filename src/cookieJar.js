import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import axios from "axios";

const frase = "123456"

export default {
    setUserLogged(user, nameUser, token) {
        //console.log(user)
        //console.log(nameUser)
        //console.log(token)
        const inMinutes = new Date(new Date().getTime() + 60 * 60 * 1000); //60 minutos

        const idUserC = CryptoJS.AES.encrypt(user.toString(),frase).toString();
        const nameUserC = CryptoJS.AES.encrypt(nameUser,frase).toString();
        //const idUserTypeC = CryptoJS.AES.encrypt(id_user_type.toString(),frase).toString();
        //const loggedC = CryptoJS.AES.encrypt('true',frase).toString();
        const tokenC = CryptoJS.AES.encrypt(token,frase).toString();

        Cookies.set("SL", idUserC, {expires: inMinutes});
        Cookies.set("SD", nameUserC, {expires: inMinutes});
        //Cookies.set("SI", idUserTypeC, {expires: inMinutes});
        //Cookies.set("SP", loggedC, {expires: inMinutes});
        Cookies.set("SR", tokenC, {expires: inMinutes});
    },
    setTime(time){
        const inMinutes = new Date(new Date().getTime() + 60 * 60 * 1000); //60 minutos

        const timeC = CryptoJS.AES.encrypt(time.toString(),frase).toString();

        Cookies.set("SK", timeC, {expires: inMinutes})
    },
    getLeftTime(){
        const timeC = Cookies.get("SK");
        var time = ''
        if (timeC != undefined) {
            const bytes  = CryptoJS.AES.decrypt(timeC, frase);
            time = bytes.toString(CryptoJS.enc.Utf8);
        }else{
            time = '';
        }

        // Checamos en caso de que haya hecho logout
        if(time == ""){
            return false;
        }

        // Fecha y hora actual
        var actualDate = new Date();
        var loginDate = new Date(time)
        var expirationDate = new Date(loginDate.setHours(loginDate.getHours() + 1));
        var minutesLeft = ((actualDate.getTime() - expirationDate.getTime()) / 1000)/60;

        // Regresamos minutos restantes
        return Math.abs(Math.round(minutesLeft));
    },
    getTokenLogged() {
        const tokenC = Cookies.get("SR");
        var token = ''
        if (tokenC != undefined) {
            const bytes  = CryptoJS.AES.decrypt(tokenC, frase);
            token = bytes.toString(CryptoJS.enc.Utf8);
        }else{
            token = '';
        }
        
        return token;
    },
    getIdUserLogged() {
        const idUserC = Cookies.get("SL");
        var user = ''
        if (idUserC != undefined) {
            const bytes  = CryptoJS.AES.decrypt(idUserC, frase);
            user = bytes.toString(CryptoJS.enc.Utf8);
        }else{
            user = -1;
        }
        
        return user;
    },
    getNameUserLogged() {
        const nameUserC = Cookies.get("SD");
        var nameUser = ''
        if (nameUserC != undefined) {
            const bytes  = CryptoJS.AES.decrypt(nameUserC, frase);
            nameUser = bytes.toString(CryptoJS.enc.Utf8);
        }
        
        return nameUser;
    },
    getIdUserTypeLogged() {
        const idUserTypeC = Cookies.get("SI");
        var idUserType = ''
        if (idUserTypeC != undefined) {
            const bytes  = CryptoJS.AES.decrypt(idUserTypeC, frase);
            idUserType = bytes.toString(CryptoJS.enc.Utf8);
        }
        
        return idUserType;
    },
    getUserLogged() {
        const loggedC = Cookies.get("SP");
        var logged = ''

        if(Cookies.get("SP") === null){
            logged = false
        }else{
            const bytes  = CryptoJS.AES.decrypt(loggedC, frase);
            logged = bytes.toString(CryptoJS.enc.Utf8);
        }
        
        return logged;
    },
    updateUserLogged(){
        const user = Cookies.get("SL")
        const nameUser = Cookies.get("SD");
        const idUserType = Cookies.get("SI");
        const logged = Cookies.get("SP");
        const token = Cookies.get("SR");
        const time = Cookies.get("SK");
        const inMinutes = new Date(new Date().getTime() + 60 * 60 * 1000); //60 minutos
        
        Cookies.set("SL", user, {expires: inMinutes});
        Cookies.set("SD", nameUser, {expires: inMinutes});
        Cookies.set("SI", idUserType, {expires: inMinutes});
        Cookies.set("SP", logged, {expires: inMinutes});
        Cookies.set("SR", token, {expires: inMinutes});
        Cookies.set("SK", time, {expires: inMinutes});
    },
    userLogout() {
        Cookies.remove("SL");
        Cookies.remove("SD");
        Cookies.remove("SR");
        Cookies.remove("SI");
        Cookies.remove("SK");
        Cookies.remove("SP");
        this.setTime("");
        axios.delete('https://api.abgpanel.com/user/log_out').then(response => {
            // console.log(response);
        }).catch((e) =>{
            // console.log(e);
        })
    },
    removeOnLogin() {
        Cookies.remove("SL");
        Cookies.remove("SD");
        Cookies.remove("SR");
        Cookies.remove("SI");
        Cookies.remove("SK");
        Cookies.remove("SP");
    }
};