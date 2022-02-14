import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Moment } from 'moment'
import { FC, useState } from 'react'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { formatData } from '../utils/date'
import { rules } from '../utils/rules'

interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

export const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent)

  const { username } = useTypeSelector((state) => state.auth.user)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatData(date.toDate()) })
    }
  }

  const submitForm = () => {
    props.submit({ ...event, author: username })
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event"
        name="description"
        rules={[rules.required('Please enter event description!')]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Date"
        name="Choose date"
        rules={[
          rules.required('Please choose date!'),
          rules.isDateAfter('This date has passed!'),
        ]}
      >
        <DatePicker
          onChange={(date) => {
            selectDate(date)
          }}
        />
      </Form.Item>
      <Form.Item label="Guest" name="Choose guest">
        <Select
          onChange={(guest: string) => {
            setEvent({ ...event, guest })
          }}
        >
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Row>
      </Form.Item>
    </Form>
  )
}
