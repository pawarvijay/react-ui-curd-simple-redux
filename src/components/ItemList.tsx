'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Container } from 'react-bootstrap';
import { RootState } from '@/store/store';
import { deleteItem, Item } from '@/store/itemsReducer';

interface ItemListProps {
    onEdit?: (item: Item) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ onEdit }) => {
    const items = useSelector((state: RootState) => state.items.items);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteItem(id) as any);
        }
    };

    if (items.length === 0) {
        return (
            <Container className="mt-4">
                <p className="text-center text-muted">No items found. Add a new item to get started.</p>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h2>Items List</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.description}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => onEdit && onEdit(item)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
