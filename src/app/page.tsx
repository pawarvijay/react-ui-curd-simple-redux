'use client';

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AddItem } from '@/components/AddItem';
import { ItemList } from '@/components/ItemList';
import { EditItem } from '@/components/EditItem';
import { Item } from '@/store/itemsReducer';
import styles from './page.module.css';

export default function Home() {
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleEditItem = (item: Item) => {
    setEditingItem(item);
  };

  const handleCloseEdit = () => {
    setEditingItem(null);
  };

  return (
    <main className={styles.main}>
      <Container className="py-5">
        <h1 className="mb-4 text-center">CRUD Application</h1>
        <AddItem />
        <EditItem
          item={editingItem}
          onClose={handleCloseEdit}
        />
        <ItemList onEdit={handleEditItem} />
      </Container>
    </main>
  );
}
