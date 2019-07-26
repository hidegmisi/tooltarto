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
new SlimSelect({
    select: '#where',
    showSearch: false
})

function isSelected (element, value, selected) {
    return element.data(value) === selected || selected === 'összes' || selected === 'ingyenes/fizetős'
}

function updateList () {
    const selectedType = typeSelect.find('option:selected').val()
    const selectedCost = costSelect.find('option:selected').val()
    const selectedWhere = whereSelect.find('option:selected').val()

    $('.tools li').each(function () {
        if (isSelected($(this), 'type', selectedType) && isSelected($(this), 'cost', selectedCost) && isSelected($(this), 'where', selectedWhere)) {
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
