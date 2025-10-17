import React, { useState, useEffect, useMemo, useRef } from 'react';
import { GuestbookEntryEntity } from '../../domain/entities';
import { ApiGuestbookRepository } from '../../infrastructure/repositories/ApiGuestbookRepository';
import {
  ChatContainer,
  ChatContent,
  ChatHeader,
  ChatTitle,
  ChatSubtitle,
  MessagesContainer,
  MessageBubble,
  MessageName,
  MessageText,
  MessageTime,
  ChatInputContainer,
  ChatInput,
  SendButton,
  CloseButton,
  EmptyState,
  LoadingSpinner,
} from './Guestbook.styles';

interface GuestbookProps {
  isVisible: boolean;
  onClose: () => void;
  onNext?: () => void;
}

const Guestbook: React.FC<GuestbookProps> = ({ isVisible, onClose, onNext }) => {
  const [entries, setEntries] = useState<GuestbookEntryEntity[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const guestbookRepository = useMemo(() => new ApiGuestbookRepository(), []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isVisible) {
      setIsLoading(true);
      const fetchEntries = async () => {
        try {
          const entries = await guestbookRepository.getAll();
          setEntries(entries);
          setTimeout(scrollToBottom, 100);
        } catch (error) {
          console.error('Failed to fetch guestbook entries:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchEntries();
    }
  }, [guestbookRepository, isVisible]);

  useEffect(() => {
    scrollToBottom();
  }, [entries]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      const newEntry = await guestbookRepository.add({
        name: 'Visitante',
        message: message.trim()
      });
      setEntries([...entries, newEntry]);
      setMessage('');
    } catch (error) {
      console.error('Failed to add guestbook entry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const formatTime = (dateInput: string | Date) => {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return diffInMinutes < 1 ? 'agora' : `${diffInMinutes}m`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h`;
    } else {
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short'
      });
    }
  };

  return (
    <ChatContainer isVisible={isVisible}>
      <CloseButton onClick={onClose}>×</CloseButton>

      <ChatContent>
        <ChatHeader>
          <ChatTitle>Chat Global</ChatTitle>
          <ChatSubtitle>
            Converse sobre projetos, tecnologia ou deixe sua opinião!
          </ChatSubtitle>
        </ChatHeader>

        <MessagesContainer>
          {isLoading ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
              gap: '16px',
              color: '#50FF6C'
            }}>
              <LoadingSpinner style={{ width: '40px', height: '40px', borderWidth: '3px' }} />
              <p>Carregando mensagens...</p>
            </div>
          ) : entries.length > 0 ? (
            <>
              {entries.map(entry => (
                <MessageBubble key={entry.id}>
                  <MessageName>{entry.name}</MessageName>
                  <MessageText>{entry.message}</MessageText>
                  <MessageTime>{formatTime(entry.createdAt)}</MessageTime>
                </MessageBubble>
              ))}
              <div ref={messagesEndRef} />
            </>
          ) : (
            <EmptyState>
              <h3>Seja o primeiro a conversar!</h3>
              <p>Inicie uma conversa sobre os projetos</p>
              <p>ou compartilhe sua opinião sobre tecnologia</p>
            </EmptyState>
          )}
        </MessagesContainer>

        <ChatInputContainer>
          <ChatInput
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isSubmitting}
          />
          <SendButton
            onClick={handleSubmit}
            disabled={isSubmitting || !message.trim()}
          >
            {isSubmitting ? (
              <LoadingSpinner />
            ) : (
              '→'
            )}
          </SendButton>
        </ChatInputContainer>
      </ChatContent>
    </ChatContainer>
  );
};

export default Guestbook;
