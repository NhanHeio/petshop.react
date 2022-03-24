import React from 'react';

const HomeCommit = () => {
    return (
        <div className="pb-6 bg-gray-50 border-t-1">
            <div className="md:w-2/4 w-4/5 mx-auto ">
                <h1 className="text-center font-bold text-gray-800 text-4xl">Cam kết</h1>
                <span className="text-center text-gray-400 text-xl">PetShop được định hình là website cung cấp các thông tin và dịch vụ chăm sóc thú cưng uy tín, chất lượng.
                    Sự hài lòng của khách hàng là ưu tiên hàng đầu của PetShop.
                    Để đạt được điều này, đội ngũ phát triển luôn tìm cách để cải thiện hiệu quả chi phí và chất lượng sản phẩm.
                    Cũng như tập trung vào đổi mới phương thức kinh doanh phù hợp nhất với khách hàng.
                </span>
            </div>
            <div className="md:flex hidden justify-around items-center mx-auto my-6 h-full w-3/4">
                <div className="w-1/3 mx-2">
                    <i className="fas fa-sticky-note text-gray-700 text-4xl"></i>
                    <h2 className="my-4 text-3xl text-gray-400">Nội dung</h2>
                    <span className="my-4 text-xl text-gray-500">Nội dung chất lượng, chính xác, có nguồn uy tín.</span>
                </div>
                <div className="w-1/3 mx-2">
                    <i className="fas fa-th-large text-gray-600 text-4xl"></i>
                    <h2 className="my-4 text-3xl text-gray-400">Sản phẩm</h2>
                    <span className="my-4 text-xl text-gray-500">Sản phẩm đảm bảo chất lượng, nguồn gốc sản phẩm uy tín, được phép buôn bán lưu thông.</span>
                </div>
                <div className="w-1/3 mx-2">
                    <i className="fas fa-user-alt text-gray-600 text-4xl"></i>
                    <h2 className="my-4 text-3xl text-gray-400">Hỗ trợ</h2>
                    <span className="my-4 text-xl text-gray-500">Nhân viên hỗ trợ nhiệt mình, tận tâm. Đảm bảo tính chuyên nghiệp của nhân viên tại cửa hàng.</span>
                </div>
            </div>
        </div>
    )
}

export default HomeCommit