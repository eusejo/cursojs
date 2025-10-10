function escopoLocal(){
    const container = document.querySelector('.container')
    const insertDateTime = container.querySelector('#datetime')

    const formatarDate = (data) => {
        const day = data.getDay()
        const diaMes = data.getDate()
        const mes = data.getMonth()
        const ano = data.getFullYear()
        const hora = data.getHours()
        const minutos = data.getMinutes()

        let dayText;

        switch (day) {
            case 0:
                dayText = 'Domingo'
                break

            case 1:
                dayText = 'Segunda'
                break
            
            case 2:
                dayText = 'Terça'
                break
            
            case 3:
                dayText = 'Quarta'
                break
            
            case 4:
                dayText = 'Quinta'
                break
            
            case 5:
                dayText = 'Sexta'
                break

            case 6:
                dayText = 'Sabado'
                break
        }
        return `${dayText}, ${diaMes} de ${mes} de ${ano} as <br><br> ${hora}:${minutos}`
    }
    const data = new Date()
    const res = formatarDate(data)
    insertDateTime.innerHTML = res
    
}
escopoLocal()