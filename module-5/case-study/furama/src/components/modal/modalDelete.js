import {toast} from "react-toastify";
import customerService from '../../service/customer/customerService';
import facilityService from '../../service/facility/facilityService';
export default function ModalDelete(props) {
    const handleDelete = async (id) => {
        try {
            switch (props.type) {
                case "customer":
                    await customerService.delete1(id);
                    break;
                case "facility":
                    await facilityService.delete1(id)
                    break
                default:
                    break;
            }
            toast("Xóa thành công");
            props.getList();
        } catch (error) {
            toast("Xóa thất bại");
        }
    };

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Xóa khách hàng
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Bạn có muốn xóa <span className="text-danger">{props.name}</span>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(props.id)}
                            data-bs-dismiss="modal"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}