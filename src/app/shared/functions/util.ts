import { v4 as uuidv4 } from 'uuid';

export const newId = () => uuidv4()

export const request = (url: string, param: any, query: boolean = false) => {
    if (query) url += queryable(param);
    else url += (param !== "" ? "/" + param : "");
    return url;
}

export const queryable = (obj: any) => {
    let query = '?';
    Object.keys(obj).forEach(k => query += `${k}=${obj[k]}&`);
    return query.substring(0, query.length - 1);
}

export const isObjectEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
}

export const isNullOrEmpty = (str: any): boolean => {
    return str === undefined || str === null || str === "" || str.trim() == "";
}

export const isDateValid = (dateStr: any): boolean => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateStr.match(regex) === null) {
        return false;
    }

    const date = new Date(dateStr);

    const timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
    }

    return date.toISOString().startsWith(dateStr);
}

export const isEmailValid = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isBirthValid = (data: string): boolean => {
    const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return re.test(data);
}

export const isCpfValid = (cpf: string): boolean => {
    cpf = cpf.replace(/[\s.-]*/igm, '')

    const re = /(\d)\1{10}/;

    if (re.test(cpf)) return false;

    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    }

    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    }

    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return true
}

export const limparString = (str: string): string => {
    if (!str || str.trim() == "") return "";
    return str.replace(/\d+$/g, "");
}

export const limparNumero = (str: string): string => {
    if (!str || str.trim() == "") return "";
    return str.replace(/\D/g, "");
}

export const filter = (value: any, lista: any[], header: any[]): any[] => {
    if (!value || value == "") return lista;

    var t = lista.filter((item: any) => {
        let has = false;

        header.forEach(head => {
            if (item.hasOwnProperty(head.key) && item[head.key] && item[head.key].toLowerCase().includes(value.toLowerCase())) {
                has = true;
            }
        });

        if (has) return item;
    });
    return t;
}

export const fileTypeIcons = (ext: string): string => {
    switch (ext) {
        case "txt":
            return "assets/imgs/icones/txt-azul.png";
        case "doc":
            return "assets/imgs/icones/docx-azul.png";
        case "docx":
            return "assets/imgs/icones/docx-azul.png";
        case "pdf":
            return "assets/imgs/icones/pdf-azul.png";
        case "xls":
            return "assets/imgs/icones/xlsx-azul.png";
        case "xlsx":
            return "assets/imgs/icones/xlsx-azul.png";
        case "csv":
            return "assets/imgs/icones/xlsx-azul.png";
        case "ppt":
            return "assets/imgs/icones/ppt-azul.png";
        case "jpeg":
            return "assets/imgs/icones/jpg-azul.png";
        case "jpg":
            return "assets/imgs/icones/jpg-azul.png";
        case "png":
            return "assets/imgs/icones/png-azul.png";
        default:
            return "assets/imgs/icones/pdf-azul.png";
    }
}

export const verificarExtensao = (nome: string) => {
    let ext = nome.split(".").pop() as string;
    if (ext.search(/xlsx|csv|png|jpeg|jpg|doc|docx|pdf|txt|ppt/) == -1)
        return false;
    else return true;
}

export const getCreditCardType = (accountNumber: any) => {
    if (
        /^(636368|655000|655007|506775|504175|5090|65165|65050)/.test(
            accountNumber
        )
    ) return "elo";
    else if (/^5[1-5]/.test(accountNumber)) return "mastercard";
    else if (/^2[2-7]/.test(accountNumber)) return "mastercard";
    else if (/^4/.test(accountNumber)) return "visa";
    else if (/^(34|37)/.test(accountNumber)) return "amex";
    else if (/^60/.test(accountNumber)) return "hipercard";
    else return ""
}

export const generateArray = (num: number) => {
    return Array.from({ length: num }, (_, i) => i + 1);
}