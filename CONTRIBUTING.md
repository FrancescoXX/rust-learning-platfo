# Contributing to RustCraft

Thank you for your interest in contributing to RustCraft! We welcome contributions from developers of all skill levels.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/rustcraft.git
   cd rustcraft
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

1. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** following our coding standards
3. **Test your changes** locally
4. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add interactive code editor component"
   ```
5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### React Components
- Use TypeScript for all components
- Follow functional component patterns with hooks
- Use descriptive component and prop names
- Add JSDoc comments for complex components

### Styling
- Use Tailwind CSS utility classes
- Follow the existing color scheme defined in `src/index.css`
- Use shadcn/ui components when possible
- Ensure responsive design (mobile-first approach)

### State Management
- Use `useKV` hook for data that needs to persist between sessions
- Use `useState` for temporary UI state
- Follow the existing patterns in `App.tsx`

### File Structure
```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components (don't modify)
│   └── custom/         # Custom components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🎯 Areas for Contribution

### 🌟 High Priority
- Interactive code editor integration
- User authentication system
- Lesson content management
- Progress tracking features

### 🎨 Design & UX
- Mobile responsiveness improvements
- Accessibility enhancements
- Animation and micro-interactions
- Dark mode implementation

### 📚 Content
- Rust learning modules
- Code examples and exercises
- Documentation improvements
- Tutorial content

### 🧪 Testing
- Unit tests for components
- Integration tests
- End-to-end testing
- Performance optimization

## 📋 Pull Request Guidelines

1. **Keep PRs focused** - One feature/fix per PR
2. **Write clear descriptions** - Explain what and why
3. **Include screenshots** for UI changes
4. **Test thoroughly** before submitting
5. **Update documentation** if needed

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested locally
- [ ] Responsive design verified
- [ ] Accessibility checked

## Screenshots (if applicable)
Add screenshots of UI changes
```

## 🐛 Reporting Issues

When reporting bugs or requesting features:

1. **Search existing issues** first
2. **Use issue templates** when available
3. **Provide detailed information**:
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots if relevant

## 💬 Getting Help

- **Discord**: Join our community (link coming soon)
- **GitHub Discussions**: For general questions
- **Issues**: For bug reports and feature requests

## 📄 License

By contributing to RustCraft, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in our README and on the website. We appreciate every contribution, no matter how small!