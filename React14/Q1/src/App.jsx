import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function App() {
  return (
    <div className="grid gap-6 p-6 max-w-3xl mx-auto">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  )
}

function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  const handleSubmit = () => {
    setSubmitted(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Textarea
          placeholder="Your feedback"
          value={form.feedback}
          onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        />
        <Button onClick={handleSubmit}>Submit</Button>

        {submitted && (
          <div className="mt-4 text-sm">
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Feedback:</strong> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ImageSlideshow() {
  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
  ]
  const [index, setIndex] = useState(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <img src={images[index]} className="mx-auto rounded-xl" />
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setIndex((index + 1) % images.length)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!todo) return
    setTodos([...todos, { text: todo, done: false }])
    setTodo("")
  }

  const toggleTodo = (i) => {
    setTodos(
      todos.map((t, index) =>
        index === i ? { ...t, done: !t.done } : t
      )
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="New todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="space-y-2">
          {todos.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <Checkbox checked={t.done} onCheckedChange={() => toggleTodo(i)} />
              <span className={t.done ? "line-through text-muted-foreground" : ""}>
                {t.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
