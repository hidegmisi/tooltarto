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

function updateList () {
    const selectedType = typeSelect.find('option:selected').val()
    const selectedCost = costSelect.find('option:selected').val()
    const selectedWhere = whereSelect.find('option:selected').val()

    $('.tools li').each(function () {
        if (($(this).data('type') === selectedType || selectedType === 'összes')
            && ($(this).data('cost') === selectedCost || selectedCost === 'összes' || selectedCost === 'ingyenes/fizetős')
            && ($(this).data('where') === selectedWhere || selectedWhere === 'összes')) {
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
