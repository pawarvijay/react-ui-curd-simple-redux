'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Modal } from 'react-bootstrap';
import { updateItem, Item } from '@/store/itemsReducer';

interface EditItemProps {
    item: Item | null;
    onClose: () => void;
    onItemUpdated?: () => void;
}

export const EditItem: React.FC<EditItemProps> = ({
    item,
    onClose,
    onItemUpdated,
}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<Item>({
        id: '',
        name: '',
        description: '',
        email: '',
    });

    useEffect(() => {
        if (item) {
            setFormData(item);
        }
    }, [item]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            dispatch(updateItem(formData) as any);
            onClose();
            if (onItemUpdated) {
                onItemUpdated();
            }
        } else {
            alert('Please fill in all required fields');
        }
    };

    return (
        <Modal show={!!item} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update Item
                    </Button>
                    <Button variant="secondary" onClick={onClose} className="ms-2">
                        Cancel
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
