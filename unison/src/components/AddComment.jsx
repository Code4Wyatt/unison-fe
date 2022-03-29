import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function AddComment({ currentUserId, postId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(null);

  const [comment, setComment] = useState({
    comment: "",
    user: currentUserId,
  });
  console.log(comment);

  const sendComments = (e) => {
    e.preventDefault();
    addComment();
    handleClose();
  };
  const commentSet = (valname, valdata) => {
    setComment({ ...comment, user: currentUserId, [valname]: valdata });
  };
  const addComment = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/timeline/${postId}/comment`,
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        window.location.reload(true)
        // fetchComments()
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <FaRegCommentDots size={20} onClick={handleShow} />
      <Modal className="modalEditInfo" show={show} onHide={handleClose}>
        <Modal.Header className="font-weight-light" closeButton>
          <Modal.Title className="font-weight-light">Add Comment</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => sendComments(e)}>
          <Modal.Body className="p-4">
            <Row>
              <Col xs="12">
                <Form.Group controlId="formHeadLine">
                  <Form.Control
                    type="text"
                    value={comment.comment}
                    onChange={(e) => commentSet("comment", e.target.value)}
                    placeholder="Comment"
                  />
                </Form.Group>
              </Col>
              <Col xs="12"></Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
