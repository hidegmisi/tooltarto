const typeSelect = $('#type')
const costSelect = $('#cost')
const whereSelect = $('#where')

function updateList () {
    const selectedType = typeSelect.find('option:selected').val()
    const selectedCost = costSelect.find('option:selected').val()
    const selectedWhere = whereSelect.find('option:selected').val()

    $('.tools li').each(function () {
        console.log('-----------------')
        console.log(selectedType)
        console.log($(this).data('type') === selectedType || selectedType === 'összes')

        console.log(selectedCost)
        console.log($(this).data('cost') === selectedCost || selectedCost === 'összes')

        console.log(selectedWhere)
        console.log($(this).data('where') === selectedWhere || selectedWhere === 'összes')

        console.log(($(this).data('type') === selectedType || selectedType === 'összes')
        && ($(this).data('cost') === selectedCost || selectedCost === 'összes')
        && ($(this).data('where') === selectedWhere || selectedWhere === 'összes'))

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
