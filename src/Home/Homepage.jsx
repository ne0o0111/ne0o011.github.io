import React from "react"

import "./Homepage.css"
import { Feature } from "./Feature"
import {
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7, picture8,
    picture9
} from "../../src/asset/images/index"


const listTeam = [
    {
        imagesUrl: picture5,
        name: "Giao diện màn hình chính",
        detail:
            "Giao diện màn hình chính hiển thị các thông tin. " +
            "Phần đầu tiên hiển thị tên trường và biểu tượng người dùng. Các biểu tượng chính bao gồm Lớp học, Học sinh, Nhân viên y tế, và Y, bác sĩ." +
            "Có các tùy chọn phụ như Diễn biến bất thường, Chuyển lớp, Chuyển cấp, Cấp quyền, Lịch sử khám, và Tiêm chủng." +
            " Ứng dụng cũng cung cấp thông tin theo dõi sức khỏe về dinh dưỡng, huyết áp, nhịp tim, và thị lực, cùng với các chuyên khoa nội" +
            " khoa - nhi khoa và mắt. Thanh công cụ dưới cùng có biểu tượng trang chủ và các chức năng bổ sung."
    },
    {
        imagesUrl: picture3,
        name: "Giao diện danh sách học sinh",
        detail:
            "Giao diện này hiển thị danh sách học sinh theo năm học , với thông tin chi tiết bao gồm mã định danh, lớp, giới tính và" +
            " trạng thái học tập. Có các tùy chọn để thêm và tạo hồ sơ học sinh mới. Học sinh được sắp xếp theo thứ tự với trạng thái hiển thị " +
            "rõ ràng (đang học tại trường hoặc không học tại trường)."
    },
    {
        imagesUrl: picture4,
        name: "Giao diện thông tin học sinh",
        detail:
            "Giao diện này cung cấp thông tin chi tiết của học sinh, bao gồm ngày sinh, giới tính, mã định danh, lớp, và quê quán. Phần theo dõi sức khỏe" +
            " hiển thị trạng thái khám sức khỏe và tình trạng theo dõi sức khỏe của học sinh trong từng học kỳ. Phần khám chuyên khoa cũng ghi nhận trạng thái " +
            "khám chuyên khoa của học sinh trong năm học hiện tại"
    },
    {
        imagesUrl: picture1,
        name: "Giao diện phân tích dữ liệu",
        detail:
        "Giao diện này thuộc phần \"Phân tích dữ liệu\" của ứng dụng quản lý sức khỏe học sinh. Màn hình hiển thị biểu đồ tổng hợp tình trạng sức khỏe học" +
            " sinh theo năm học , với các lớp học và các tiêu chí sức khỏe như suy dinh dưỡng và thừa cân, béo phì. Dưới biểu đồ là " +
            "chú thích chi tiết số lượng học sinh gặp vấn đề về dinh dưỡng và tình trạng theo dõi sức khỏe. Hiển thị tổnh số học sinh và số học sinh đang được theo dõi"
    },
    {
        imagesUrl: picture2,
        name: "Giao diện theo dõi sức khoẻ học sinh",
        detail:
        "Giao diện theo dõi sức khoẻ học sinh bao gồm các thông tin về thể lực, chiều cao, cân nặng, tình trạng dinh dưỡng. Ngày được khám và thông tin người khám."
    },

    {
        imagesUrl: picture6,
        name: "Giao diện thông tin dinh dưỡng",
        detail:
            "Giao diện thông tin dinh dưỡng bao gồm biểu đồ dinh dưỡng học sinh trong toàn trường"
    },
    {
        imagesUrl: picture8,
        name: "Giao diện danh sách bất thường",
        detail:
            "Thông tin về các tình trạng bất thường của học sinh trong toàn trường"
    },
    {
        imagesUrl: picture9,
        name: "Giao diện chuyển lớp",
        detail:
            "Giao diện bao gồm toàn bộ trong tin của học sinh trong trường, gồm họ và tên, mã số, ngày sinh, giới tính và lớp hiện tại."
    },
    {
        imagesUrl: picture7,
        name: "Giao diện thông tin tài khoản",
        detail:
            "Bao gồm thông tin cá nhân của người dùng. Chức năng đổi mật khẩu và đăng xuất tài khoản."
    },
]
const Homepage = () => {
    return (
        <div className="w-100">
            <div className="header-aboutus ">
                <div className="banner-aboutus">
                    <div className="banner-group">
                        <p className="header-text-group">
                            Ứng dụng Sổ sức khoẻ là ứng dụng giúp phụ huynh và nhà trường theo dõi, quản lý sức khoẻ học sinh.
                            Chủ động trong việc phòng bệnh và chăm sóc sức khoẻ bản thân.
                            Với ứng dụng Sổ sức khoẻ mỗi phụ huynh học sinh sẽ có một quyển sổ y bạ sức khoẻ cả đời của học sinh
                            được kết nối với hệ thống, tạo thuận lời cho phụ huynh phát
                            hiện bệnh sớm, điều trị kịp thời khi bệnh còn ở giai đoạn sớm mang lại hiệu quả điều trị cao,
                            giảm bớt chi phí khám bệnh, chữa bệnh của mỗi học sinh.
                        </p>
                    </div>
                </div>
            </div>
            <div className="team-section">
                <div className="team-container">

                        {listTeam.map((teams, index) => {
                            return (
                                <Feature
                                    key={index}
                                    imagesUrl={teams?.imagesUrl}
                                    name={teams?.name}
                                    detail={teams?.detail}
                                />
                            )
                        })}

                </div>
            </div>
        </div>
    )
}
export default Homepage;
