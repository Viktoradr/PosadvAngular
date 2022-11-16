export const formatCurrency = (event: any) => {
  const uy = new Intl
    .NumberFormat('pt-BR',{style: 'currency', currency:'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 })
    .format(event.target.value);

  return uy;
}