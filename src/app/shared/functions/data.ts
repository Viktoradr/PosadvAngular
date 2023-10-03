import * as moment from 'moment';

moment.locale('pt-br');

export const getToday = (): moment.Moment => {
    return moment()
}

export const getCompetencia = (data: any): Date => {
    return moment(moment(data).format("YYYY-MM-01")).toDate()
}

export const getDataString = (data: any, format: string = "DD/MM/YYYY HH:mm"): string => {
    return moment(data).format(format)
}

export const getDateFromString = (dt: any, format: string = "DD/MM/YYYY") => {
    return moment(dt, format)
}

export const getDate = (dt: any): Date => {
    return moment(dt).toDate()
}

export const getMoment = (dt: any): moment.Moment => {
    return moment(dt)
}

export const addMinutes = (dt: any, mins: number): moment.Moment => {
    return getMoment(getMoment(dt).add(mins, 'minutes').format("YYYY-MM-DD HH:mm:ss"))
}

export const addDay = (dt: any, days = 1): moment.Moment => {
    return moment(dt).add(days, 'days')
}

export const subDay = (dt: any, days = 1): moment.Moment => {
    return moment(dt).subtract(days, 'days')
}

export const isDateSame = (dt1: any, dt2: any): boolean => {
    let dtx = moment.isMoment(dt1) ? dt1 : getDataString(dt1, "YYYY-MM-DD")
    let dty = moment.isMoment(dt2) ? dt2 : getDataString(dt2, "YYYY-MM-DD")
    return moment(dtx).isSame(moment(dty))
}

export const isDateAfter = (dt1: any, dt2: any): boolean => {
    let dtx = moment.isMoment(dt1) ? dt1 : getDataString(dt1, "YYYY-MM-DD")
    let dty = moment.isMoment(dt2) ? dt2 : getDataString(dt2, "YYYY-MM-DD")
    return moment(dtx).isAfter(moment(dty))
}

export const isDateSameAfter = (dt1: any, dt2: any): boolean => {
    return moment(dt1).isSameOrAfter(moment(dt2))
}

export const isDateBefore = (dt1: any, dt2: any): boolean => {
    return moment(dt1).isBefore(moment(dt2))
}

export const isDateSameBefore = (dt1: any, dt2: any): boolean => {
    return moment(dt1).isSameOrBefore(moment(dt2))
}

export const diffBetweenDays = (dt1: any, dt2: any): number => {
    const a = moment(dt1)
    const b = moment(dt2)
    return a.diff(b, 'days')
}

export const getCompetenciaAtual = (): any => {
    const firstDay = moment().clone().startOf('month')
    const endOfmonth = moment().clone().endOf('month').subtract(1, "days")

    return {
        inicio: firstDay.toDate(),
        fim: endOfmonth.toDate(),
    }
}

export const calculateWeekDays = (value: Date) => {
    const dt = getMoment(value)
    let dias: Date[] = []
    let isoWeekday = dt.isoWeekday()

    let start = isoWeekday == 7 ?
        dt.subtract(0, 'days') :
        dt.subtract(isoWeekday, 'days')

    dias = [...dias, start.toDate()]

    for (let index = 1; index <= 6; index++) {
        let param = start.add(1, 'days').toDate()
        dias = [...dias, param]
    }

    return dias
}