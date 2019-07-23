const typeSelect = $('#type')
const costSelect = $('#cost')
const whereSelect = $('#where')

function updateList () {
    const selectedType = typeSelect.find('option:selected').val()
    const selectedCost = costSelect.find('option:selected').val()
    const selectedWhere = whereSelect.find('option:selected').val()

    $('.tools li').each(function () {
        console.log($(this).data('type'))
        console.log($(this).data('cost'))
        console.log($(this).data('where'))
        if ($(this).data('type') === selectedType || selectedType === 'összes'
            && $(this).data('cost') === selectedCost || selectedCost === 'összes'
            && $(this).data('where') === selectedWhere || selectedWhere === 'összes') {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })
}

typeSelect.change(updateList)
costSelect.change(updateList)
whereSelect.change(updateList)
