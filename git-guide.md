# -------------------------
# CHECK STATUS
# -------------------------

# See changed files
git status

# Short status
git status -s

# See current branch
git branch


# -------------------------
# GET LATEST CODE
# -------------------------

# Download latest changes
git pull

# Download without merging
git fetch


# -------------------------
# BRANCH
# -------------------------

# Create new branch
git switch -c branch-name

# Change branch
git switch branch-name

# Previous branch
git switch -

# Delete local branch
git branch -d branch-name


# -------------------------
# ADD + COMMIT
# -------------------------

# Add all files
git add .

# Add single file
git add filename

# Commit
git commit -m "message"


# -------------------------
# PUSH
# -------------------------

# First push new branch
git push -u origin branch-name

# Normal push
git push


# -------------------------
# SEE HISTORY
# -------------------------

# Commit history
git log

# Short clean history
git log --oneline

# Branch graph
git log --oneline --graph --all


# -------------------------
# SEE CHANGES
# -------------------------

# See unstaged changes
git diff

# See staged changes
git diff --staged


# -------------------------
# UNDO
# -------------------------

# Undo file changes (not committed)
git restore filename

# Remove from staging
git restore --staged filename

# Undo last commit but keep files
git reset --soft HEAD~1

# Undo last commit and delete changes
git reset --hard HEAD~1


# -------------------------
# STASH TEMP WORK
# -------------------------

# Save unfinished work
git stash

# Restore stash
git stash pop

# List stash
git stash list


# -------------------------
# REMOTE
# -------------------------

# Show remote URL
git remote -v

# Change remote
git remote set-url origin URL


# -------------------------
# USER CONFIG
# -------------------------

# Current repo user
git config user.name
git config user.email

# Set repo user
git config user.name "name"
git config user.email "email"

# Global user
git config --global user.name "name"
git config --global user.email "email"


# -------------------------
# COLLAB WORKFLOW
# -------------------------

# Before starting work
git switch main
git pull
git switch -c feature-name

# After changes
git add .
git commit -m "feat: message"
git push -u origin feature-name


# ---
# Common commit prefixes:
# ---

feat:     new feature
fix:      bug fix
refactor: code restructure
style:    css/formatting
docs:     documentation
test:     tests
chore:    configs/packages

