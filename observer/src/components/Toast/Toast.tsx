import { ToastContainer, toast } from 'react-toastify'
import observable from '../../observer'
function logger(data: string) {
  console.log(`${Date.now()} ${data}`)
}

function toastyfy(data: string) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000
  })
}

observable.subscribe(logger)
observable.subscribe(toastyfy)


const Toast = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default Toast