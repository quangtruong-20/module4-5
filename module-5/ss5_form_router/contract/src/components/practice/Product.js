import {useParams} from "react-router-dom";

export default function Product() {
    // Sử dụng useParams() để lấy giá trị của categoryId
    let { categoryId } = useParams();

    return (
        <>

            <h3>Id selected {categoryId} </h3>

        </>
    )

}