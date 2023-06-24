import React, { useEffect, useState } from "react";
import {
  StyleContainer,
  StyleContentLeft,
  StyleContetnRight,
  StyleButton,
  StyleContent,
  StyleTitle,
  StyleLoading,
} from "./style";
import { SlideBar } from "components/SlideBar";
import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { tagAPI } from "services/tagAPI";
import { Alert, Button, Input, Modal, Pagination } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useLoading } from "hooks/LoadingContext";
import { StyleError } from "pages/login/style";

interface DataType {
  key: string;
  id: string;
  name?: string;
}

const pageSize = 5;

export const ListTag = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isId, setIsId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");
  const { setLoadingTrue, setLoadingFalse } = useLoading();
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteTag = async (id: string) => {
    await tagAPI.deleteTag(id);
    getProfile();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 800);
  };

  const handleEditTags = (id: string) => {
    setIsId(id);
    setIsEdit(true);
    setOpenModal(true);
  };

  const getProfile = async () => {
    const { data } = await tagAPI.getTag();
    setData(data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
    setIsEdit(false);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleCancel = () => {
    setError("");
    setOpenModal(false);
    setName("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoadingTrue();
    // Perform form submission logic here
    const dataTag = {
      name: name,
    };
    if (name !== "") {
      if (isEdit) {
        await tagAPI.editTag(dataTag, isId);
      } else {
        await tagAPI.createTag(dataTag);
      }
      setLoadingFalse();
      // Reset form field
      setName("");
      setOpenModal(false);
      getProfile();
      setError("");
    } else {
      setLoadingFalse();
      setError("Tên tag không được để trống");
    }
  };

  const paginatedData = data?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      width: 200,
      render: (text, record, index) => index + 1 + (currentPage - 1) * pageSize,
    },
    {
      title: "Họ và Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      align: "center",
      width: 350,
      key: "action",
      render: (text, record) => (
        <StyleButton>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEditTags(record?.id)}
          >
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteTag(record?.id)}
          >
            Xóa
          </Button>
        </StyleButton>
      ),
    },
  ];

  const tagDetails: any = data?.filter((item: any) => item.id === isId);
  console.log("👋  tagDetails:", tagDetails);
 
  return (
    <>
      {showAlert && (
        <StyleLoading>
          <Alert
            message="Xóa tag thành công"
            type="success"
            showIcon
            closable
          />
        </StyleLoading>
      )}
      <StyleContainer>
        <StyleContentLeft>
          <SlideBar />
        </StyleContentLeft>
        <StyleContetnRight>
          <StyleContent>
            <StyleTitle>Danh sách tag</StyleTitle>
            <Button
              onClick={handleOpenModal}
              type="primary"
              shape="round"
              icon={<PlusCircleOutlined />}
            >
              THÊM MỚI TAG
            </Button>
          </StyleContent>
          <Table
            columns={columns}
            dataSource={paginatedData}
            pagination={false}
          />
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handleChangePage}
            style={{ paddingTop: "24px" }}
          />
        </StyleContetnRight>
        <Modal
          open={openModal}
          centered
          onOk={handleSubmit}
          onCancel={handleCancel}
        >
          <form onSubmit={handleSubmit}>
            <h2>{!isEdit ? "Thêm mới tag loại hàng" : "Sửa tag loại hàng"}</h2>
            {isEdit ? <div style={{padding: '5px', fontSize: '15px', fontWeight: '600'}}>Tên tag: {tagDetails[0]?.name}</div> : null}
            <Input
              size="large"
              name="name"
              placeholder={!isEdit ?  "Tên tag" : "Tên tag muốn sửa"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyleError>{error}</StyleError>
          </form>
        </Modal>
      </StyleContainer>
    </>
  );
};
