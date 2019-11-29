<?php
//search
	include('connect/connect.php');
	if(isset($_GET['key']) && strlen($_GET['key'])>0){ 			// xem key có tồn tại và độ dài phải lớn hơn 2
		$keyword = $_GET['key'];								// hiển thị dữ liệu từ form có tên là key
		$product = array();										// gán mảng
		$products = $mysqli->query("SELECT p.*, GROUP_CONCAT(i.link) AS images FROM product p INNER JOIN images i ON p.id = i.id_product where name like '%$keyword%' group by p.id ");
		if( mysqli_num_rows($products) > 0)						// tìm thấy sản phẩm
		{
			while ($row = $products->fetch_object()){			// tìm nạp mảng đối tượng ( nếu có )
				$assignees = explode(',', $row->images);		// tách mảng
				$row->images = $assignees;						// gán giá trị ass cho thuộc tính image
				$product[] = $row;								// thêm vào mảng 
			}	
		}
		else													// không tìm thấy sản phẩm
		{	
			echo 'KHONG_TIM_THAY';
		}
		echo (json_encode($product));							// xuất mảng đã encode
	}
	else{
		echo 'NHAP_TU_KHOA';									
	}
?>