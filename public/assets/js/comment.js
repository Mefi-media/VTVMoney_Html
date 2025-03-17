//Show form reply comment
$('body').on('click','*[data-replyCmt]',function(e){
	let id_comment = $(this).closest('*[data-idCmt]').attr('data-idCmt');
	$(this).closest('*[data-idCmt]').find('.comment-id-'+id_comment).slideToggle();
});