const typeSelect = $('#type')
const costSelect = $('#cost')
const whereSelect = $('#where')

new SlimSelect({
    select: '#type',
    showSearch: false
})
new SlimSelect({
    select: '#cost',
    showSearch: false
})

function isSelected (element, value, selected) {
    return element.data(value) === selected || selected === 'összes'
}

function updateList () {
    const selectedType = typeSelect.find('option:selected').val()
    const selectedCost = costSelect.find('option:selected').val()

    $('.tools li').each(function () {
        if (isSelected($(this), 'type', selectedType) && isSelected($(this), 'cost', selectedCost)) {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })
}


typeSelect.change(updateList)
costSelect.change(updateList)
whereSelect.change(updateList)

updateList()

var showlegal = false;

$('.legal').click( () => {
    console.log(showlegal)
    if(showlegal === false){
        console.log('false')
        $('.hiddenlegal').css('display', 'inline-block')
        showlegal = true;
    } else if (showlegal === true){
        $('.hiddenlegal').css('display', 'none')
        showlegal = false;
    }
})