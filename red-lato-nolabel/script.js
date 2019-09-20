const typeSelect = $('#type')
const costSelect = $('#cost')
const originSelect = $('#origin')

new SlimSelect({
    select: '#type',
    showSearch: false
})
new SlimSelect({
    select: '#cost',
    showSearch: false
})
new SlimSelect({
    select: '#origin',
    showSearch: false
})

function isSelected (element, value, selected) {
    return element.data(value) === selected || selected === 'Ár' || selected === 'Mire használható?' || selected === 'Magyar vagy külföldi?'
}

function updateList () {
    const selectedType = typeSelect.find('option:selected').val()
    const selectedCost = costSelect.find('option:selected').val()
    const selectedOrigin = originSelect.find('option:selected').val()

    $('.tools li').each(function () {
        if (isSelected($(this), 'type', selectedType) && isSelected($(this), 'cost', selectedCost) && isSelected($(this), 'origin', selectedOrigin)) {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })
}


typeSelect.change(updateList)
costSelect.change(updateList)
originSelect.change(updateList)

updateList()