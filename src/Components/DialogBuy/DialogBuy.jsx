import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClearIcon from '@material-ui/icons/Clear';

export default function DialogBuy(props) {
  return (
    <div>
      <Dialog open={true} maxWidth="lg">
        <DialogTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#0E4861',
            }}
          >
            <span>Giao hàng</span>
            <ClearIcon
              style={{ cursor: 'pointer' }}
              onClick={() => props.setDialogBuy(false)}
            />
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tất cả các đơn đặt hàng được ship trực tiếp đối với đơn hàng nội
            thành và qua chuyển phát nhanh.
          </DialogContentText>
          <DialogContentText>
            Tất cả các đơn đặt hàng được ship trực tiếp đối với đơn hàng nội
            thành và qua chuyển phát nhanh.
          </DialogContentText>
          <DialogContentText>
            Đối với giao hàng tỉnh giá sẽ được tính theo số lượng sản phẩm: 40k
            cho đơn hàng có 1 sản phẩm và +10k cho 1 sản phẩm tiếp theo
          </DialogContentText>
          <DialogContentText>
            Tất cả các đơn hàng đều được gửi bằng hình thức chuyển phát nhanh.
          </DialogContentText>
          <div
            style={{
              fontSize: '1.25em',
              marginBottom: '24px',
              color: '#0E4861',
            }}
          >
            <span>Đổi trả</span>
          </div>

          <DialogContentText>
            Các mặt hàng được đổi lại trong vòng 24h kể từ lúc nhận hàng và tình
            trạng hàng phải giống như lúc giao hàng.
          </DialogContentText>
          <DialogContentText>
            Sản phẩm giảm giá sẽ có chính sách đổi trả riêng
          </DialogContentText>
          <div
            style={{
              fontSize: '1.25em',
              marginBottom: '24px',
              color: '#0E4861',
            }}
          >
            <span>Hỗ trợ</span>
          </div>
          <DialogContentText>
            Hãy cho chúng tôi biết bạn cần gì hoặc muốn góp ý thêm cho Akyo Shop
          </DialogContentText>
          <DialogContentText>
            Email: akyoShop.shop2717@gmail.com
          </DialogContentText>
          <DialogContentText>
            Điện thoại: 01285460817 - 0866804578
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
