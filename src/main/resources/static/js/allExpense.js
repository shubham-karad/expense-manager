$(function() {

	
		
		ajaxAllExpenses();
	
});

function ajaxAllExpenses() {

	$.ajax({

		type : 'GET',
		contentType : 'application/json',
		url : 'http://localhost:8080/expense/allExpense',
		success : function(data, status) {
			var tbody = $('tbody');
			tbody.html('');
			
			

			$.each(data, function(key, value) {

				if (value.amount === 0) return;
				tbody.append(' \
						<tr align="center">\
							<td>'
						+ value.expenseTitle + 
						 '</td>\
							<td>' + value.category +
						 '</td>\
						<td>' + value.amount +
						 '</td>\
						<td>' + value.date +
						 '</td>\
						<td> <input type="button" id="edit"  value="Edit"></td>\
						<td> <input type="button" id="delete"  value="Delete"></td>\
						</tr>');

			})

		},
		error : function(e) {
			alert('error');
			console.log('ERROR', e);
		}
	});

}