import * as Util from './util';

export const mascara_DTCartao = (data: string) => {
    if (!data || data.trim() == "") return "";
    return Util.limparNumero(data)
        .substring(0, 6)
        .replace(/(\d{2})(\d{4})/gi, "$1/$2");
}

export const mascara_DT = (data: string) => {
    if (!data || data.trim() == "") return "";
    return Util.limparNumero(data)
        .substring(0, 10)
        .replace(/(\d{2})(\d{2})(\d{4})/gi, "$1/$2/$3");
}

export const mascara_TEL = (tel: string) => {
    if (!tel || tel.trim() == "") return "";
    return Util.limparNumero(tel)
        .substring(0, 12)
        .replace(/(\d{2})(\d{8,9})/gi, "($1) $2");
}

export const mascara_CPF = (cpf: string) => {
    if (!cpf || cpf.trim() == "") return "";
    return Util.limparNumero(cpf)
        .substring(0, 11)
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4");
}

export const mascara_CNPJ = (cnpj: string) => {
    if (!cnpj || cnpj.trim() == "") return "";
    return Util.limparNumero(cnpj)
        .substring(0, 14)
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, "$1.$2.$3/$4-$5");
}

export const mascara_CPFCNPJ = (cpfcnpj: string) => {
    if (!cpfcnpj || cpfcnpj.trim() == "") return "";
    let str = Util.limparNumero(cpfcnpj);
    return str.length > 11 ? mascara_CNPJ(str) : mascara_CPF(str);
}

export const mascara_CNJ = (cnj: string, valid = false) => {
    if (!cnj || cnj.trim() == "") return "";
    let limpo = Util.limparNumero(cnj).padStart(20, "0");
    let mask = limpo.replace(
        /(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/g,
        "$1-$2.$3.$4.$5.$6"
    );
    if (valid)
        return !ValidarCNJ(mask) ? cnj : mask;
    return mask;
}

export const mascara_VALOR = (num: any, hasFormat = true) => {
    if (num) {
        if (/,/.test(num)){
            let v = num.split(',');
            let inteiro = Util.limparNumero(v[0]);
            let decimal = v[1] == null || v[1] == '' ? '00' : v[1];
            num = `${inteiro}.${decimal}`;
        }
        else {
            let decimal = '00';
            let inteiro = Util.limparNumero(num);
            num = `${inteiro}.${decimal}`;
        }

        if (hasFormat) {
            let intl = Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
            const formatado = intl.format(num);
            return formatado === "R$ NaN" ? "" : formatado;
        }
        else return num
    }
    return "";
}

export const formatCurrency = (event: any) => {
    const uy = new Intl
        .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 })
        .format(event.target.value);

    return uy;
}

export const mascararEmail = (email: string) => {
    if (Util.isNullOrEmpty(email))
        return email;

    let v = email.split('@');

    let str1 = v[0].substring(0, 2);
    let str2 = v[1];

    return `${str1}*******@${str2}`;
}

export const reduzirTexto = (str: string, len: number = 500) => {
    if (Util.isNullOrEmpty(str)) return "";

    return str.length > len
        ? str.substring(0, len) + "..."
        : str;
}

export const ValidarCNJ = (NumeroProcesso: string) => {
    var v = NumeroProcesso.replace("-", ".").split(".");

    var NNNNNNN = Number.parseInt(v[0]);
    var DD = v[1];
    var AAAA = Number.parseInt(v[2]);
    var JTR = Number.parseInt(v[3] + v[4]);
    var OOOO = Number.parseInt(v[5]);

    var Digito = calculo_mod97(NNNNNNN, AAAA, JTR, OOOO);

    return Digito == DD;
}

const calculo_mod97 = (NNNNNNN: number, AAAA: number, JTR: number, OOOO: number) => {
    let valor1 = "";
    let resto1 = 0;
    let valor2 = "";
    let resto2 = 0;
    let valor3 = "";
    valor1 = preencher_zero(NNNNNNN, 7);
    resto1 = Number.parseInt(valor1) % 97;
    valor2 =
        preencher_zero(resto1, 2) +
        preencher_zero(AAAA, 4) +
        preencher_zero(JTR, 3);
    resto2 = Number.parseInt(valor2) % 97;
    valor3 = preencher_zero(resto2, 2) + preencher_zero(OOOO, 4) + "00";
    return preencher_zero(98 - (Number.parseInt(valor3) % 97), 2);
}

const preencher_zero = (numero: any, quantidade: number) => {
    let temp = numero.toString();
    let retorno = "";
    if (quantidade < temp.length) return temp;
    else {
        for (let i = 0; i < quantidade - temp.length; i++) {
            retorno = "0" + retorno;
        }
        return retorno + temp;
    }
}