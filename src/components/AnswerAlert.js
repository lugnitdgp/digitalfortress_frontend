import Swal from 'sweetalert2';

export default (isCorrect) => {
    if (isCorrect == -1)
        Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Something Went Wrong',
            text: 'Please refresh the page',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
    if (isCorrect === 1)
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'You Gave the correct Answer',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
    if (isCorrect === 0)
        Swal.fire({
            position: 'center',
            title: 'You Gave the Wrong answer',
            text: 'Read the question carefully',
            type: 'error',
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
}