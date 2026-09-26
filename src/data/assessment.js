// Technical Assessment & Skill Experience Analyzer Data
// Supports dual evaluation: Interactive Programming Lab + Targeted Conceptual MCQs
// Calibrated for MCA Final-Year Computer Science and Occupational Benchmarks

export const assessmentQuestions = [
  {
    id: "Q1",
    skillId: "SKL-PROG-01",
    skillName: "Java",
    category: "Programming",
    difficulty: "Intermediate",
    prompt: "In Object-Oriented Software Design, which principle states that software entities (classes, modules, functions) should be open for extension, but closed for modification?",
    options: [
      { id: "A", text: "Single Responsibility Principle (SRP)" },
      { id: "B", text: "Open/Closed Principle (OCP)", isCorrect: true },
      { id: "C", text: "Liskov Substitution Principle (LSP)" },
      { id: "D", text: "Dependency Inversion Principle (DIP)" }
    ],
    explanation: "The Open/Closed Principle (OCP) states that classes should be designed to allow their behavior to be extended via polymorphism/interfaces without altering their tested source code."
  },
  {
    id: "Q2",
    skillId: "SKL-PROG-04",
    skillName: "Data Structures & Algorithms",
    category: "Programming",
    difficulty: "Advanced",
    prompt: "What is the tightest asymptotic upper bound (Big-O) for finding the shortest path in a weighted graph with V vertices and E non-negative edges using Dijkstra's algorithm implemented with a Min-Heap / Binary Priority Queue?",
    options: [
      { id: "A", text: "O(V^2)" },
      { id: "B", text: "O(E + V log V)" },
      { id: "C", text: "O((V + E) log V)", isCorrect: true },
      { id: "D", text: "O(V * E)" }
    ],
    explanation: "With a standard binary heap, each vertex extraction takes O(log V) and each edge relaxation takes O(log V), yielding O((V + E) log V)."
  },
  {
    id: "Q3",
    skillId: "SKL-DB-01",
    skillName: "SQL",
    category: "Database",
    difficulty: "Intermediate",
    prompt: "Which ACID property guarantees that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially?",
    options: [
      { id: "A", text: "Atomicity" },
      { id: "B", text: "Consistency" },
      { id: "C", text: "Isolation", isCorrect: true },
      { id: "D", text: "Durability" }
    ],
    explanation: "Isolation ensures that concurrent transactions do not interfere with each other and are executed as if they were serial."
  },
  {
    id: "Q4",
    skillId: "SKL-DB-02",
    skillName: "PostgreSQL",
    category: "Database",
    difficulty: "Advanced",
    prompt: "In relational database indexing, why is a B+ Tree preferred over a standard Binary Search Tree or Hash Index for range queries (e.g., WHERE age BETWEEN 25 AND 35)?",
    options: [
      { id: "A", text: "B+ Trees store duplicate keys in internal nodes." },
      { id: "B", text: "Leaf nodes in a B+ Tree are sequentially linked in a doubly-linked list, allowing fast ordered traversals.", isCorrect: true },
      { id: "C", text: "Hash indexes consume less memory for range scans." },
      { id: "D", text: "Binary Search Trees always remain perfectly balanced regardless of insertion sequence." }
    ],
    explanation: "B+ Trees link all leaf nodes in a continuous list, allowing range scans to locate the start key in O(log N) and then perform linear disk page scans along the leaf chain."
  },
  {
    id: "Q5",
    skillId: "SKL-WEB-01",
    skillName: "React",
    category: "Web Development",
    difficulty: "Intermediate",
    prompt: "In modern React, what is the primary benefit of the Virtual DOM diffing algorithm (Reconciliation)?",
    options: [
      { id: "A", text: "It compiles JSX into native assembly language." },
      { id: "B", text: "It minimizes costly direct manipulations of the real browser DOM by calculating minimal batched mutation patches.", isCorrect: true },
      { id: "C", text: "It eliminates the need for CSS stylesheets." },
      { id: "D", text: "It guarantees zero memory usage during state re-renders." }
    ],
    explanation: "The Virtual DOM keeps a lightweight JavaScript representation of UI tree, diffs it against previous state, and batches only required DOM element updates."
  },
  {
    id: "Q6",
    skillId: "SKL-WEB-03",
    skillName: "Node.js & REST APIs",
    category: "Web Development",
    difficulty: "Intermediate",
    prompt: "Which HTTP status code should a RESTful API return when a request is successfully processed and a new resource has been created on the server?",
    options: [
      { id: "A", text: "200 OK" },
      { id: "B", text: "201 Created", isCorrect: true },
      { id: "C", text: "204 No Content" },
      { id: "D", text: "304 Not Modified" }
    ],
    explanation: "HTTP 201 Created indicates the request succeeded and led to the creation of a resource, typically including a Location header."
  },
  {
    id: "Q7",
    skillId: "SKL-AI-01",
    skillName: "Machine Learning Fundamentals",
    category: "AI / ML",
    difficulty: "Intermediate",
    prompt: "In machine learning classification, which metric is most reliable for evaluating a model trained on a heavily imbalanced dataset (e.g., 99% negative cases, 1% positive fraud cases)?",
    options: [
      { id: "A", text: "Raw Accuracy" },
      { id: "B", text: "Mean Squared Error" },
      { id: "C", text: "F1-Score / PR-AUC (Precision-Recall)", isCorrect: true },
      { id: "D", text: "R-Squared" }
    ],
    explanation: "Accuracy is deceptive on imbalanced datasets (a naive classifier guessing all negative gets 99% accuracy). Precision, Recall, and F1-Score specifically evaluate the minority target class."
  },
  {
    id: "Q8",
    skillId: "SKL-AI-03",
    skillName: "Deep Learning (Basics)",
    category: "AI / ML",
    difficulty: "Intermediate",
    prompt: "What is the primary role of the activation function (e.g., ReLU, Sigmoid, GELU) in an artificial neural network?",
    options: [
      { id: "A", text: "To normalize the input pixel dimensions." },
      { id: "B", text: "To introduce non-linearity, allowing the network to learn non-linear decision boundaries.", isCorrect: true },
      { id: "C", text: "To eliminate the need for backpropagation gradients." },
      { id: "D", text: "To prevent GPU thermal throttling during forward passes." }
    ],
    explanation: "Without non-linear activations, any deep neural network collapses mathematically into a single linear matrix multiplication."
  },
  {
    id: "Q9",
    skillId: "SKL-CLOUD-03",
    skillName: "Docker & Containerization",
    category: "Cloud",
    difficulty: "Intermediate",
    prompt: "How does an operating system-level container (such as Docker) differ architecturally from a traditional Hardware Hypervisor Virtual Machine (such as VMware ESXi)?",
    options: [
      { id: "A", text: "Containers virtualize physical RAM chips while VMs do not." },
      { id: "B", text: "Containers share the host OS kernel and isolate user spaces via cgroups/namespaces, whereas VMs run a complete guest OS on virtual hardware.", isCorrect: true },
      { id: "C", text: "Containers require dedicated hypervisor BIOS extensions." },
      { id: "D", text: "Virtual machines cannot run Linux software." }
    ],
    explanation: "Docker containers share the host Linux kernel and use kernel namespaces and cgroups for process isolation, making them lightweight and rapid to boot."
  },
  {
    id: "Q10",
    skillId: "SKL-CLOUD-02",
    skillName: "AWS Fundamentals",
    category: "Cloud",
    difficulty: "Intermediate",
    prompt: "In AWS Cloud Infrastructure, which service component acts as a virtual firewall for your EC2 instances to control incoming and outgoing network traffic at the instance level?",
    options: [
      { id: "A", text: "Network ACL (NACL)" },
      { id: "B", text: "Security Group", isCorrect: true },
      { id: "C", text: "AWS Route 53" },
      { id: "D", text: "Internet Gateway" }
    ],
    explanation: "Security Groups operate at the instance level and are stateful firewalls, whereas Network ACLs operate at the subnet boundary and are stateless."
  },
  {
    id: "Q11",
    skillId: "SKL-TOOL-01",
    skillName: "Git & Version Control",
    category: "Tools",
    difficulty: "Intermediate",
    prompt: "Which Git command integrates changes from one branch into another by applying each commit sequentially on top of the target tip, rewriting commit history to maintain a linear graph?",
    options: [
      { id: "A", text: "git merge --no-ff" },
      { id: "B", text: "git rebase", isCorrect: true },
      { id: "C", text: "git cherry-pick" },
      { id: "D", text: "git stash apply" }
    ],
    explanation: "git rebase moves or combines a sequence of commits to a new base commit, creating a clean linear timeline."
  },
  {
    id: "Q12",
    skillId: "SKL-PROG-02",
    skillName: "Python",
    category: "Programming",
    difficulty: "Intermediate",
    prompt: "In Python memory management, how does the Global Interpreter Lock (GIL) influence multi-threaded execution in CPython?",
    options: [
      { id: "A", text: "It prevents CPU-bound threads from executing Python bytecode in parallel across multiple physical cores.", isCorrect: true },
      { id: "B", text: "It disables all asynchronous I/O networking operations." },
      { id: "C", text: "It causes memory leaks when using generator expressions." },
      { id: "D", text: "It forces variables to be statically typed at compile time." }
    ],
    explanation: "The CPython GIL is a mutex protecting access to Python objects, preventing multiple native threads from executing Python bytecodes concurrently."
  }
];

// Interactive Programming Challenges per Skill
export const programmingChallenges = {
  "Java": {
    id: "COD-JAVA-01",
    skillName: "Java",
    title: "Thread-Safe LRU Cache Architecture",
    difficulty: "Advanced",
    language: "java",
    timeLimit: "2.0s",
    memoryLimit: "256 MB",
    scenario: "Implement an enterprise-grade Least Recently Used (LRU) Cache in Java with O(1) average time complexity for both get() and put() operations, ensuring thread safety.",
    starterCode: `import java.util.*;
import java.util.concurrent.locks.*;

public class LRUCache<K, V> {
    private final int capacity;
    // TODO: Define doubly-linked list nodes and hash map for O(1) lookup
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public V get(K key) {
        // Implement constant-time access & promote node to head
        return null;
    }
    
    public void put(K key, V value) {
        // Insert node, evict oldest if capacity exceeded
    }
}`,
    solutionSample: `import java.util.*;
import java.util.concurrent.locks.*;

public class LRUCache<K, V> {
    private final int capacity;
    private final Map<K, Node<K, V>> map;
    private final ReentrantLock lock = new ReentrantLock();
    private Node<K, V> head, tail;

    static class Node<K, V> {
        K key; V value;
        Node<K, V> prev, next;
        Node(K k, V v) { this.key = k; this.value = v; }
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
    }

    public V get(K key) {
        lock.lock();
        try {
            Node<K, V> node = map.get(key);
            if (node == null) return null;
            moveToHead(node);
            return node.value;
        } finally { lock.unlock(); }
    }

    public void put(K key, V value) {
        lock.lock();
        try {
            if (map.containsKey(key)) {
                Node<K, V> node = map.get(key);
                node.value = value;
                moveToHead(node);
            } else {
                if (map.size() >= capacity) {
                    map.remove(tail.key);
                    removeNode(tail);
                }
                Node<K, V> newNode = new Node<>(key, value);
                addFirst(newNode);
                map.put(key, newNode);
            }
        } finally { lock.unlock(); }
    }

    private void moveToHead(Node<K, V> node) {
        removeNode(node);
        addFirst(node);
    }
    private void removeNode(Node<K, V> node) {
        if (node.prev != null) node.prev.next = node.next;
        else head = node.next;
        if (node.next != null) node.next.prev = node.prev;
        else tail = node.prev;
    }
    private void addFirst(Node<K, V> node) {
        node.next = head;
        node.prev = null;
        if (head != null) head.prev = node;
        head = node;
        if (tail == null) tail = node;
    }
}`,
    testCases: [
      { id: 1, name: "Capacity Limit Invalidation", input: "put('A', 1), put('B', 2), put('C', 3), put('D', 4) -> capacity=3", expected: "Key 'A' evicted correctly", executionTime: "12ms", memory: "18.4 MB" },
      { id: 2, name: "Promotion on Hit", input: "get('B') accessed -> evict next", expected: "Node 'B' preserved as most recently used", executionTime: "8ms", memory: "18.1 MB" },
      { id: 3, name: "Concurrency Mutex Guard", input: "100 concurrent read/write threads", expected: "Zero race conditions, state consistent", executionTime: "34ms", memory: "22.6 MB" }
    ]
  },

  "Python": {
    id: "COD-PY-01",
    skillName: "Python",
    title: "Algorithmic Anomaly Detection in Financial Streams",
    difficulty: "Intermediate",
    language: "python",
    timeLimit: "1.0s",
    memoryLimit: "128 MB",
    scenario: "Write a high-performance Python function that processes a generator stream of timestamped transaction records, computes rolling z-scores using Welford's algorithm, and returns detected outliers exceeding a threshold.",
    starterCode: `import math

def detect_outliers(stream, window_size=50, z_threshold=3.0):
    """
    Detect statistical outliers using streaming variance.
    stream: iterable of (timestamp, amount)
    returns: list of anomalous (timestamp, amount, z_score)
    """
    anomalies = []
    # TODO: Implement streaming statistics without storing unbounded history
    return anomalies`,
    solutionSample: `import math
from collections import deque

def detect_outliers(stream, window_size=50, z_threshold=3.0):
    anomalies = []
    window = deque()
    running_sum = 0.0

    for ts, amount in stream:
        window.append(amount)
        running_sum += amount

        if len(window) > window_size:
            evicted = window.popleft()
            running_sum -= evicted

        if len(window) >= 10:
            n = len(window)
            mean = running_sum / n
            variance = sum((x - mean) ** 2 for x in window) / n
            std_dev = math.sqrt(variance)

            if std_dev > 1e-6:
                z_score = abs(amount - mean) / std_dev
                if z_score > z_threshold:
                    anomalies.append((ts, amount, round(z_score, 2)))

    return anomalies`,
    testCases: [
      { id: 1, name: "Normal Distribution Baseline", input: "500 Gaussian values, mu=100, sigma=15", expected: "Outliers flagged: exactly 2 items (>3 sigma)", executionTime: "14ms", memory: "11.2 MB" },
      { id: 2, name: "Zero-Variance Invariant", input: "Constant stream [50, 50, 50...]", expected: "No division-by-zero, returns []", executionTime: "6ms", memory: "9.8 MB" },
      { id: 3, name: "Large Stream Memory Stability", input: "100,000 transaction events", expected: "Bounded memory footprint (<15 MB)", executionTime: "48ms", memory: "14.2 MB" }
    ]
  },

  "SQL": {
    id: "COD-SQL-01",
    skillName: "SQL",
    title: "Multi-Partition Window Ranking & Revenue Deciles",
    difficulty: "Advanced",
    language: "sql",
    timeLimit: "0.8s",
    memoryLimit: "64 MB",
    scenario: "Formulate an optimized SQL query utilizing CTEs and Window Functions (DENSE_RANK, NTILE) to compute the top 3 revenue generators per occupational category, along with their contribution percentage to the departmental total.",
    starterCode: `-- Given: sales (sale_id, employee_id, department_id, amount, sale_date)
-- Goal: Retrieve Top 3 performers per department with running percentage
WITH DepartmentRevenue AS (
    -- TODO: Aggregate total department revenue
)
SELECT 
    department_id,
    employee_id,
    -- Calculate ranking and percent contribution
FROM sales;`,
    solutionSample: `WITH DepartmentTotals AS (
    SELECT 
        department_id,
        SUM(amount) AS total_dept_revenue
    FROM sales
    GROUP BY department_id
),
RankedEmployees AS (
    SELECT 
        s.department_id,
        s.employee_id,
        SUM(s.amount) AS employee_revenue,
        DENSE_RANK() OVER (
            PARTITION BY s.department_id 
            ORDER BY SUM(s.amount) DESC
        ) AS rank_in_dept
    FROM sales s
    GROUP BY s.department_id, s.employee_id
)
SELECT 
    r.department_id,
    r.employee_id,
    r.employee_revenue,
    r.rank_in_dept,
    ROUND((r.employee_revenue * 100.0 / d.total_dept_revenue), 2) AS pct_contribution
FROM RankedEmployees r
JOIN DepartmentTotals d ON r.department_id = d.department_id
WHERE r.rank_in_dept <= 3
ORDER BY r.department_id, r.rank_in_dept;`,
    testCases: [
      { id: 1, name: "Tie-Breaker Consistency", input: "Duplicate sales totals in Dept 101", expected: "DENSE_RANK avoids skipped ranks", executionTime: "5ms", memory: "4.2 MB" },
      { id: 2, name: "Zero Revenue Handling", input: "Departments with zero net sales", expected: "Handled without NULL propagation", executionTime: "3ms", memory: "3.9 MB" },
      { id: 3, name: "Query Plan Cost Check", input: "EXPLAIN ANALYZE on 50k rows", expected: "HashAggregate + WindowAgg without SeqScan", executionTime: "16ms", memory: "8.1 MB" }
    ]
  },

  "React": {
    id: "COD-REACT-01",
    skillName: "React",
    title: "Resilient Custom Hook: useDebounceWithCancel",
    difficulty: "Intermediate",
    language: "javascript",
    timeLimit: "1.0s",
    memoryLimit: "64 MB",
    scenario: "Build a production-ready custom React hook `useDebounce` that delays value propagation, prevents memory leaks on unmount, and provides an imperative `.flush()` and `.cancel()` handler.",
    starterCode: `import { useState, useEffect, useRef } from 'react';

export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    // TODO: Implement timer ref, cleanup on unmount, and flush method
    
    return debouncedValue;
}`,
    solutionSample: `import { useState, useEffect, useRef, useCallback } from 'react';

export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [value, delay]);

    const cancel = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);

    const flush = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            setDebouncedValue(value);
        }
    }, [value]);

    return [debouncedValue, { cancel, flush }];
}`,
    testCases: [
      { id: 1, name: "Rapid Keystroke Debouncing", input: "Typing 'React' with 50ms intervals, delay=300ms", expected: "Triggers update exactly once after 300ms", executionTime: "4ms", memory: "5.1 MB" },
      { id: 2, name: "Unmount Cleanup Invariant", input: "Component unmounts before timer expires", expected: "Zero state update warnings on unmounted component", executionTime: "2ms", memory: "4.8 MB" },
      { id: 3, name: "Imperative Flush Execution", input: "Form submit calls flush()", expected: "Latest value applied synchronously", executionTime: "2ms", memory: "4.9 MB" }
    ]
  },

  "Data Structures & Algorithms": {
    id: "COD-DSA-01",
    skillName: "Data Structures & Algorithms",
    title: "Directed Graph Cycle Detection (Topological Sort)",
    difficulty: "Advanced",
    language: "python",
    timeLimit: "1.5s",
    memoryLimit: "128 MB",
    scenario: "Implement Kahn's Algorithm (BFS using in-degrees) or DFS with 3-color marking to detect whether a software build dependency graph contains circular dependencies.",
    starterCode: `from collections import defaultdict, deque

def has_circular_dependency(num_tasks, dependencies):
    """
    dependencies: list of (task, prerequisite)
    returns: True if a cycle exists, False if build order is valid
    """
    # TODO: Calculate in-degrees, populate queue, count processed nodes
    return False`,
    solutionSample: `from collections import defaultdict, deque

def has_circular_dependency(num_tasks, dependencies):
    adj = defaultdict(list)
    in_degree = [0] * num_tasks

    for u, v in dependencies:
        adj[v].append(u)
        in_degree[u] += 1

    queue = deque([i for i in range(num_tasks) if in_degree[i] == 0])
    visited_count = 0

    while queue:
        node = queue.popleft()
        visited_count += 1
        for neighbor in adj[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count != num_tasks`,
    testCases: [
      { id: 1, name: "Linear Pipeline (DAG)", input: "5 tasks, dependencies: 0->1->2->3->4", expected: "False (Acyclic)", executionTime: "8ms", memory: "10.4 MB" },
      { id: 2, name: "Direct Circular Mutex", input: "3 tasks: 0->1, 1->2, 2->0", expected: "True (Cycle Detected)", executionTime: "6ms", memory: "10.1 MB" },
      { id: 3, name: "Disconnected Forest of 10,000 Nodes", input: "Sparse graph with 10k nodes", expected: "Correctly resolved in O(V + E)", executionTime: "28ms", memory: "16.8 MB" }
    ]
  },

  "Docker & Containerization": {
    id: "COD-DKR-01",
    skillName: "Docker & Containerization",
    title: "Multi-Stage Distroless Production Dockerfile",
    difficulty: "Intermediate",
    language: "dockerfile",
    timeLimit: "1.0s",
    memoryLimit: "64 MB",
    scenario: "Draft an optimized, production-grade Dockerfile for a Node.js microservice utilizing multi-stage builds, non-root user execution, cache-optimized COPY commands, and minimal distroless attack surface.",
    starterCode: `# Multi-stage Build for Secure Node.js Production
# Stage 1: Build Dependencies
FROM node:20-alpine AS builder
WORKDIR /app
# TODO: Copy package files, install, build

# Stage 2: Production Distroless Runner
FROM gcr.io/distroless/nodejs20-debian12
# TODO: Copy compiled artifacts and set USER`,
    solutionSample: `# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build --if-present

# Stage 2: Distroless Runtime
FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
COPY --from=builder --chown=nonroot:nonroot /app/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /app/dist ./dist
COPY --from=builder --chown=nonroot:nonroot /app/package.json ./package.json

USER nonroot
ENV NODE_ENV=production
EXPOSE 3000
CMD ["dist/server.js"]`,
    testCases: [
      { id: 1, name: "Layer Cache Invalidation", input: "package.json copied prior to application code", expected: "Cached layer reused when source changes", executionTime: "3ms", memory: "3.2 MB" },
      { id: 2, name: "Non-Root Privilege Check", input: "USER nonroot declaration present", expected: "Zero root permissions inside container", executionTime: "2ms", memory: "3.1 MB" },
      { id: 3, name: "Final Image Size Footprint", input: "Multi-stage artifact extraction", expected: "Image footprint < 95 MB (Distroless)", executionTime: "4ms", memory: "3.5 MB" }
    ]
  },

  "Machine Learning Fundamentals": {
    id: "COD-ML-01",
    skillName: "Machine Learning Fundamentals",
    title: "Vector Cosine Distance & Normalization Matrix",
    difficulty: "Intermediate",
    language: "python",
    timeLimit: "1.2s",
    memoryLimit: "128 MB",
    scenario: "Implement vectorized Cosine Similarity from scratch without scikit-learn, handling zero-magnitude vector edge cases and multi-vector pairwise batch evaluation.",
    starterCode: `import math

def cosine_similarity(vec_a, vec_b):
    """
    Compute cosine similarity between two numeric lists.
    returns float between -1.0 and 1.0
    """
    # TODO: Implement dot product / magnitude calculation
    return 0.0`,
    solutionSample: `import math

def cosine_similarity(vec_a, vec_b):
    if len(vec_a) != len(vec_b) or not vec_a:
        return 0.0

    dot_product = sum(a * b for a, b in zip(vec_a, vec_b))
    mag_a = math.sqrt(sum(a * a for a in vec_a))
    mag_b = math.sqrt(sum(b * b for b in vec_b))

    if mag_a < 1e-9 or mag_b < 1e-9:
        return 0.0

    return round(dot_product / (mag_a * mag_b), 4)`,
    testCases: [
      { id: 1, name: "Orthogonal Vectors", input: "vec_a=[1, 0], vec_b=[0, 1]", expected: "0.0 (Zero similarity)", executionTime: "4ms", memory: "8.2 MB" },
      { id: 2, name: "Collinear High-Dim Vectors", input: "vec_a=[2, 4, 6], vec_b=[1, 2, 3]", expected: "1.0 (Identical direction)", executionTime: "5ms", memory: "8.1 MB" },
      { id: 3, name: "Zero Vector Degradation", input: "vec_a=[0, 0], vec_b=[3, 4]", expected: "0.0 without ZeroDivisionError", executionTime: "2ms", memory: "7.9 MB" }
    ]
  }
};

// Experience Analysis Evaluator for Any Skill
export const calculateSkillExperience = (skill, mcqScore = 80, codeScore = 85) => {
  // Weighted aggregate: 40% Conceptual/MCQ + 60% Practical/Code
  const compositeProficiency = Math.round((mcqScore * 0.4) + (codeScore * 0.6));
  
  // Base student months from profile
  const baseMonths = skill?.experienceMonths || 18;
  // Calibrated experience months based on test performance
  const calibratedMonths = Math.round(baseMonths * (compositeProficiency / 75));

  let experienceTier = "Junior / Foundational";
  let experienceLabel = "< 1 Year Practical";
  let readiness = "Academic Familiarity";

  if (compositeProficiency >= 88 && calibratedMonths >= 28) {
    experienceTier = "Production Mastery";
    experienceLabel = "2.5+ Years Equivalent";
    readiness = "Production-Ready / Senior Academic";
  } else if (compositeProficiency >= 75 && calibratedMonths >= 18) {
    experienceTier = "Mid-Level Competence";
    experienceLabel = "1.5 - 2.5 Years Equivalent";
    readiness = "Enterprise Entry-Level Ready";
  } else if (compositeProficiency >= 60) {
    experienceTier = "Junior Developer";
    experienceLabel = "6 - 18 Months Equivalent";
    readiness = "Supervised Development Ready";
  } else {
    experienceTier = "Novice / Foundational";
    experienceLabel = "< 6 Months Equivalent";
    readiness = "Needs Foundational Coursework";
  }

  return {
    skillName: skill?.name || "Target Skill",
    category: skill?.category || "General",
    compositeProficiency,
    mcqScore,
    codeScore,
    calibratedMonths,
    experienceTier,
    experienceLabel,
    readiness,
    theoreticalDepth: mcqScore,
    practicalFluency: codeScore,
    codeQualityScore: Math.min(100, Math.round(codeScore * 0.95 + 4)),
    benchmarks: {
      enterpriseEntry: 75,
      seniorThreshold: 90
    },
    recommendation: compositeProficiency >= 80 
      ? `Strong production readiness. Continue building open-source capstone features in ${skill?.name}.`
      : `Complete hands-on unit test suites and architectural refactoring to elevate practical fluency in ${skill?.name}.`
  };
};

export const initialAssessmentSummary = {
  overallScore: 78,
  totalQuestions: 12,
  completedDate: "2026-09-24",
  domainScores: [
    { category: "Programming", score: 82, benchmark: 75, status: "Proficient" },
    { category: "Database", score: 72, benchmark: 70, status: "Proficient" },
    { category: "Web Development", score: 76, benchmark: 70, status: "Proficient" },
    { category: "AI / ML", score: 61, benchmark: 70, status: "Development Priority" },
    { category: "Cloud", score: 48, benchmark: 65, status: "Critical Priority" },
    { category: "Problem Solving", score: 84, benchmark: 75, status: "Advanced" }
  ],
  developmentAreas: [
    {
      domain: "Cloud Computing & Infrastructure",
      currentScore: 48,
      recommendedActions: [
        "Complete hands-on containerization labs (Docker images & compose)",
        "Review AWS VPC, IAM, and Security Group configurations"
      ]
    },
    {
      domain: "AI / Machine Learning",
      currentScore: 61,
      recommendedActions: [
        "Deepen understanding of neural network activations and loss functions",
        "Implement precision-recall threshold tuning for imbalanced classifiers"
      ]
    }
  ]
};
